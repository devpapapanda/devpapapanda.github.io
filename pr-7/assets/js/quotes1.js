
        function set_font_style(font_style){
          //alert($(font_style).data('value'));
          $('#font_style').val($(font_style).data('value'));
          create_canvas();
        }
        
        function setbackgroundColor(picker){
          //console.log(picker);
            $('#qoute_background_color').val('#' + picker.toString());
            $('#qoute_background_image').val('');
            $('#quote_content_dummy').css('background-image', 'url()');
            $('#quote_content_dummy').css("background-color", '#' + picker.toString());
           create_canvas();
        }
        
        function select_background(e){
           
            qoute_background_image= $(e).val();
            $('#qoute_background_image').val(qoute_background_image);
            $('#quote_content_dummy').css('background-image', 'url(' + qoute_background_image + ')');
            $('#quote_content_dummy').css('background-size', 'cover');
           
            $('#qoute_background_color').val('');
           create_canvas();
          }

          function draw_text_into_canvas(){
            quote_content= $('textarea#quote_content_dummy').val();
            set_textbox_maxlenght();
            $('textarea#quote_content').val(quote_content);
            $('#canvas_text').text($('#quote_content').val())

            create_canvas();
          }
          var numberOfCurrentLineBreaks=0;

          function set_textbox_maxlenght(){
              

            var quote_content_dummy= $('#quote_content_dummy').val();
            numberOfLineBreaks = (quote_content_dummy.match(/\n/g)||[]).length;
            characterCount = quote_content_dummy.length + numberOfLineBreaks;
            // console.log("text lenght"+ quote_content_dummy.length);
            // //console.log( "Char lenght" + characterCount);
            // console.log("Line break lenght"+ numberOfLineBreaks);
            var max_length_textbox;

            // if(numberOfLineBreaks==0){
            //     max_length_textbox=180;
            // }else if (numberOfLineBreaks==1) {
            //     max_length_textbox=180-;
            // }else if (numberOfLineBreaks==2) {
                
            // }else if (numberOfLineBreaks==3) {
                
            // }else if (numberOfLineBreaks==4) {
                
            // }else if (numberOfLineBreaks==5) {
                
            // }

            // for(var i=0; i<=6;i++){
            //     if(numberOfLineBreaks==i){
            //         //max_length_textbox=210-(30*(i));

            //     }else if(numberOfLineBreaks>6){
            //         //var text=quote_content_dummy.split(/\n/g);
            //         //console.log('qq'+text[numberOfLineBreaks]);
            //         //text1=quote_content_dummy.replace(text[numberOfLineBreaks] , ' ');
            //         //console.log('ee'+text1);
            //         //$('textarea#quote_content_dummy').val(text1);
            //         decrease_font_size();
            //     }
            // }

            if(characterCount>=240 || numberOfLineBreaks>6){
              if(numberOfCurrentLineBreaks<numberOfLineBreaks){
                decrease_font_size();
              numberOfCurrentLineBreaks=numberOfLineBreaks;
              }
              

            }

            if(characterCount<=240 || numberOfLineBreaks<6){
              if(numberOfCurrentLineBreaks>numberOfLineBreaks){
                increase_font_size();
              numberOfCurrentLineBreaks=numberOfLineBreaks;
              }
              

            }

            // var text=quote_content_dummy.split(/\n/g);
            // console.log('qq: '+text[numberOfLineBreaks]);
            // text1=quote_content_dummy.replace(text[numberOfLineBreaks] , ' ');
            // console.log('ee: '+text1);

            
            $('textarea#quote_content_dummy').attr('maxlength',216);

          }

          function setTextColor(picker) {
              $('#quote_text_color').val('#' + picker.toString());
              $('#quote_content_dummy').css('color', '#' + picker.toString());
              create_canvas();
          }


          function increase_font_size(){
            font_size=$('#font_size').val();
            font_size = parseInt(font_size) + 7;
            $('#font_size').val(font_size.toString());
            create_canvas();
          }
  
          function decrease_font_size(){
            font_size=$('#font_size').val();
            font_size = parseInt(font_size) - 7;
            $('#font_size').val(font_size.toString());
            create_canvas();
          }
  
          
        

        

        function hexToRgb(hex) {
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? "rgb("+parseInt(result[1], 16)+","+parseInt(result[2], 16)+","+parseInt(result[3], 16)+")" : "rgb(6,5,11)";
        }


        $(document).ready(function(){
          $('[data-toggle="tooltip"]').tooltip();   
        });


        function image_modal(){
          
          $('#quote_modal').modal('toggle');
          $('#background_picture_modal').modal('toggle');
        }

        function close_background_picture_modal(){
          $('#quote_modal').modal('toggle');
          $('#background_picture_modal').modal('toggle');
        }

        
        function save_it_facebook(image_link){
          $.ajax({
            type: "POST",
            url: "<?=base_url()?>doodleish/save_in_facebook",
            data: { 
              image: image_link,
            }
          }).done(function(o) {
            console.log(o); 
            //location.reload();
            // If you want the file to be visible in the browser 
            // - please modify the callback in javascript. All you
            // need is to return the url to the file, you just saved 
            // and than put the image in your browser.
          });
        }

      
        