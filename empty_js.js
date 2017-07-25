var table = $("#table").DataTable();
			$('#button1').click(function(){
				table.destroy();
    			var aoData = {};
			    
			    table = $("#table").DataTable({
        	        "serverSide": true,
        	        "ajax": {
        	        	"url" :"<s:url action='query' namespace='/system/userRole'/>",
    		        	"data" : function(d) {
    		        		return $.extend(d, aoData);
    		        	}
        	        },
        	        "columns": [
        	        		    { "data": "cn","orderable": false,"className":"dt-center"},
        	        		    { "data": "mail","orderable": false,"className":"dt-center"},
        	        		    { "data": "mail","orderable": false,"className":"dt-center"}
        	                ]
        		});     

            	
			});