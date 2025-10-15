
        function increase_font_size_1(){
            font_size=$('#font_size').val();
            font_size = parseInt(font_size) + 2;
            $('#font_size').val(font_size.toString());
            create_canvas();
          }
  
          function decrease_font_size_1(){
            font_size=$('#font_size').val();
            font_size = parseInt(font_size) - 2;
            $('#font_size').val(font_size.toString());
            create_canvas();
          }
  
          function setTextColor_1(picker) {
              $('#quote_text_color').val('#' + picker.toString());
              create_canvas();
          }
  
          function select_background_1(e){
            //alert($(e).attr('id'));
            //alert($(e).val())
            qoute_background_color= $(e).val();
            $('#qoute_background_color').val(qoute_background_color);
            //x.src=$(e).val();
            create_canvas();
          }
  
  
          function draw_text_into_canvas_1(){
            quote_content= $('textarea#quote_content_dummy').val();
            
            $('textarea#quote_content').val(quote_content);
            // enteredText = quote_content;
            // numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;
            // characterCount = enteredText.length + numberOfLineBreaks;
            // console.log(enteredText.split("\n"));
            // alert("line break "+numberOfLineBreaks+" ,char count "+characterCount);
            create_canvas();
          }
        
        
        
        
        
        function create_canvas_1(){

            $('#div_canvas_preview').css("background-image", "url("+$('#qoute_background_color').val()+")");
            $('#canvas_text').text($('#quote_content').val())

            x.src=  $('#qoute_background_color').val();
            quote_content= $('#quote_content').val();
            quote_array=quote_content.split("\n");



            text_color=$('#quote_text_color').val();
            font_size=$('#font_size').val();
            //alert(font_size);
            y.src="<?=base_url()?>assets/img/quote/logo_quote_low.jpg";
            ctx.drawImage(x, 0, 0, 277,277);
            ctx.drawImage(y, 190, 220, 70,40);
            alert(window.innerWidth);
            ctx.font= font_size * window.innerWidth +"px" +" Kaushan Script";
            ctx.fillStyle = text_color;
            ctx.textAlign = "center";
            var i,index;
            quote_array.forEach(function(i,index) {
            //console.log(i+', index '+index);
            x_axis=canvas.width/2;
            y_axis=(canvas.height/2)+(35*index);
            ctx.fillText(i, x_axis , y_axis );
            });
            // ctx.fillText(quote_content, canvas.width/2, canvas.height/2);
        }

        function load_canvases(){

      
            for(var i=0;i<100;i++){
            var canvas=document.createElement('canvas');
              //canvas.id = "CursorLayer";
             canvas.width = 277;
             canvas.height = 277;
             //canvas.style.zIndex = 8;
             canvas.style.position = "absolute";
             //canvas.style.border = "1px solid white";
    
             //var body = document.getElementsByTagName("body")[0];
             //body.appendChild(canvas);
            //var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var x = document.createElement('img');
            var x = new Image();
            var y = document.createElement('img');
            var y =new Image();
    
            y.src="<?=base_url()?>assets/img/quote/logo_quote_low.jpg";
            
            x.src="<?=base_url()?>assets/img/quote_backgroung/p10.jpg";
            x.onload = function () {
              //console.info("Image loaded1 !");
              //y.onload=function(){
               // console.info("Image loaded2 !");
              //do something...
                //var body = document.getElementsByTagName("body")[0];
                //body.appendChild(canvas);
                ctx.drawImage(x, 0, 0, 277,277);
                ctx.drawImage(y, 190, 220, 70,40);
    
              ctx.font="30px Kaushan Script";
              ctx.fillStyle = "#fed136";
              ctx.textAlign = "center";
              ctx.fillText("Hello World", canvas.width/2, canvas.height/2);
              //ctx.fillText("Hello1", (canvas.width/2)+50, (canvas.height/2)+50);
    
              dataUrl =canvas.toDataURL("image/jpeg");
              //imageFoo = document.createElement('img');
              //imageFoo.src = dataUrl;
    
              //Style your image here
              //imageFoo.style.width = '200px';
              //imageFoo.style.height = '200px';
    
              //After you are done styling it, append it to the BODY element
              //document.body.appendChild(imageFoo);
              //}
    
              var quote_image='<div class="col-lg-3 col-md-4 col-6">'+
                                  '<a href="#" class="d-block mb-4 h-100">'+
                                        '<img class="img-fluid img-thumbnail" src="'+dataUrl+'" style="height:277px;width:277px;" alt="">'+
                                      '</a>'+
                                '</div>';
    
              //$(quote_image).insertAfter('#div_quote_image');
              $('#div_quote_image').append(quote_image);
             
            }
            }
        }
    



        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        /*
  Only tested on a really limited set of fonts, can very well not work
  This should be taken as an proof of concept rather than a solid script.
	
  @Params : an url pointing to an embed Google Font stylesheet
  @Returns : a Promise, fulfiled with all the cssRules converted to dataURI as an Array
*/
function GFontToDataURI(url) {
  return fetch(url) // first fecth the embed stylesheet page
    .then(resp => resp.text()) // we only need the text of it
    .then(text => {
      // now we need to parse the CSSruleSets contained
      // but chrome doesn't support styleSheets in DOMParsed docs...
      let s = document.createElement('style');
      s.innerHTML = text;
      document.head.appendChild(s);
      let styleSheet = s.sheet

      // this will help us to keep track of the rules and the original urls
      let FontRule = rule => {
        let src = rule.style.getPropertyValue('src') || rule.style.cssText.match(/url\(.*?\)/g)[0];
        if (!src) return null;
        let url = src.split('url(')[1].split(')')[0];
        return {
          rule: rule,
          src: src,
          url: url.replace(/\"/g, '')
        };
      };
      let fontRules = [],
        fontProms = [];

      // iterate through all the cssRules of the embedded doc
      // Edge doesn't make CSSRuleList enumerable...
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        let r = styleSheet.cssRules[i];
        let fR = FontRule(r);
        if (!fR) {
          continue;
        }
        fontRules.push(fR);
        fontProms.push(
          fetch(fR.url) // fetch the actual font-file (.woff)
          .then(resp => resp.blob())
          .then(blob => {
            return new Promise(resolve => {
              // we have to return it as a dataURI
              //   because for whatever reason, 
              //   browser are afraid of blobURI in <img> too...
              let f = new FileReader();
              f.onload = e => resolve(f.result);
              f.readAsDataURL(blob);
            })
          })
          .then(dataURL => {
            // now that we have our dataURI version,
            //  we can replace the original URI with it
            //  and we return the full rule's cssText
            return fR.rule.cssText.replace(fR.url, dataURL);
          })
        )
      }
      document.head.removeChild(s); // clean up
      return Promise.all(fontProms); // wait for all this has been done
    });
}

/* Demo Code */

const ctx = canvas.getContext('2d');
let svgData = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
  '<foreignObject width="100%" height="100%">' +
  '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px;font-family:Pangolin">' +
  'test' +
  '</div>' +
  '</foreignObject>' +
  '</svg>';
// I'll use a DOMParser because it's easier to do DOM manipulation for me
let svgDoc = new DOMParser().parseFromString(svgData, 'image/svg+xml');
// request our dataURI version
GFontToDataURI('https://fonts.googleapis.com/css?family=Pangolin')
  .then(cssRules => { // we've got our array with all the cssRules
    let svgNS = "http://www.w3.org/2000/svg";
    // so let's append it in our svg node
    let defs = svgDoc.createElementNS(svgNS, 'defs');
    let style = svgDoc.createElementNS(svgNS, 'style');
    style.innerHTML = cssRules.join('\n');
    defs.appendChild(style);
    svgDoc.documentElement.appendChild(defs);
    // now we're good to create our string representation of the svg node
    let str = new XMLSerializer().serializeToString(svgDoc.documentElement);
    // Edge throws when blobURIs load dataURIs from https doc...
    // So we'll use only dataURIs all the way...
    let uri = 'data:image/svg+xml;charset=utf8,' + encodeURIComponent(str);

    let img = new Image();
    img.onload = function(e) {
      URL.revokeObjectURL(this.src);
      canvas.width = this.width;
      canvas.height = this.height;
      ctx.drawImage(this, 0, 0);
    }
    img.src = uri;
  })
  .catch(reason => console.log(reason)) // if something went wrong, it'll go here