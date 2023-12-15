CKEDITOR.dialog.add('imagens', function( editor )
{

	return {
		
		title : 'Inserir Imagen para o servidor',
		minWidth : 390,
		minHeight : 230,
		contents : [
		{
			id     : 'tab1',
          label    : 'Label',
          title    : 'Title',
          expand   : true,
          padding  : 0,
          elements :
          [
            {
              type : 'html',
              html : '<form id="formImage" action="'+ host+'setmedia" method="post">'+
              				'<div class="form-group selecionar-arquivo">'+
                            	'<label for="Mídia">Imagem</label>'+
                            	'<input files="1" style="margin:5px; " class="form-control" name="file" type="file" />'+
                        	'</div>'+
                        	'<br />'+
              				'<div class="form-group selecionar-arquivo">'+
                            	'<label for="Mídia">Largura</label>'+
                            	'<input style="height:25px; margin:5px; border: 1px solid" class="form-control" name="width" type="number" />'+
                        	'</div>'+
                        	'<br />'+
              				'<div class="form-group selecionar-arquivo">'+
                            	'<label for="Mídia">Altura</label>'+
                            	'<input style="height:25px; margin:5px; border: 1px solid" class="form-control" name="height" type="number" />'+
                        	'</div>'+
              		'</form>'
            },
           ]
		}
        ],
		onOk : function() {
			var editor = this.getParentEditor();

			$("#formImage").ajaxForm({
			    success: function(dados) {
			    	if(dados.save){
			    		$("#formImage").find('input').val('');
			    		//editor.insertHtml('<img class="img-responsive" src="'+ host + '/' + dados.stpath +'" style="width:' + dados.width + 'px; height:' + dados.height + 'px;" />');
			    		editor.insertHtml(dados.img);
			    	}else{
			    		alert(dados.mensagem);
			    	}
			    }
			}).submit();

			
		},
	buttons : [ CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton ]
	};
} );


//código para criar o botão
CKEDITOR.plugins.add( 'imagens',
{
	init : function( editor )
	{
		var command = editor.addCommand( 'imagens', new CKEDITOR.dialogCommand( 'imagens' ) );
		command.modes = { wysiwyg:1, source:1 };
		command.canUndo = false;

		editor.ui.addButton( 'Imagens',
		{
			label : 'Inserir Imagens para o Servidor',
			command : 'imagens',
			icon : this.path + 'upimg.png'
		});


		CKEDITOR.dialog.add( 'imagens', 'imagens' );
	}
});
