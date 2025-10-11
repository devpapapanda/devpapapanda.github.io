

      // var config = {
      //   extraPlugins: 'codesnippet',
      //   codeSnippet_theme: 'monokai_sublime',
      //   height: '600px',
      //   uiColor : '#AADC6E',
      //   plugin:"image"
      // };

     
        //CKFinder.setupCKEditor( editor );
        
      // CKEDITOR.editorConfig = function( config )
      //   {
      //       //Define changes to default configuration here. For example:
      //       config.language = 'es';
      //       config.uiColor = '#F7B42C';
      //       config.height = 300;
      //       config.toolbarCanCollapse = true;
      //       config.extraPlugins = 'codesnippet';
      //       config.codeSnippet_theme = 'school_book';
      //       config.codeSnippet_languages = {
      //         javascript: 'JavaScript',
      //         php: 'PHP'
      //       };
      //   };
  
  $(document).ready(function(){
      $('.js-example-basic-multiple').select2();
      $('.form_div').hide();
      $('#title').show();
      
    });
 




function showimage_preview_post_main_image(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#post_main_image_preview').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#post_main_image").change(function() {
    showimage_preview_post_main_image(this);
  });

  function showimage_preview_post_body_image_1(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#post_body_image_1_preview').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#post_body_image_1").change(function() {
    showimage_preview_post_body_image_1(this);
  });

  function showimage_preview_post_body_image_2(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#post_body_image_2_preview').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#post_body_image_2").change(function() {
    showimage_preview_post_body_image_2(this);
  });

  function showimage_preview_post_body_image_3(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#post_body_image_3_preview').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#post_body_image_3").change(function() {
    showimage_preview_post_body_image_3(this);
  });


function check_add_category(){
    var if_add=$('#add_a_category').val();
    //alert(if_add);
    $('#add_a_category').val('');
    if(if_add=='add_a_category'){
      $('#add_a_category').next().hide();
      $('#add_a_category').hide();
      $('#add_category_div').append('<div id="category_input_div" class="row" style="margin-left:20px;"><input type="text" class="form-control col-sm-8" placeholder="Category" id="add_category_input_value"><a href="javascript:void(0);" class="btn btn-success" onclick="save_categories()">confirm</a></div>');
      //alert(1);
      
    }
  }




