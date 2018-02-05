function envioemailCtrl($scope,$http,$window){
    
    var latitude  = -35.717680;
    var longitude = -9.644430;
    
    var geoOptions = { enableHighAccuracy: true,
	                       timeout: 30000,
	                       maximumAge: 3000
                         };
    
    function geoError( err ) {
	   switch( err.code ) {
           case 1:
			 // permissao negada pelo usuario
            break;

		  case 2:
            // nao foi possivel alcancar os satelites GPS
            break;

		  case 3:
			// a requisicao demorou demais para retornar
            break;

		  case 0:
			// ocorreu um erro desconhecido...
			break;
	       }	
    };
    
    function geoSuccess(pos){
                latitude  = pos.coords.latitude;
                longitude = pos.coords.longitude;
            };

    $scope.enviar = function(){
        show();
        
        $scope.envio.location = {lat: latitude, lng: longitude};
        
        navigator.geolocation.getCurrentPosition(geoSuccess,geoError,geoOptions);
        
        $http.post('/emailverao2015',$scope.envio).success(function(retorno)
        {
            if(retorno){   
                        $scope.show = {sucesso  : true,
                                       alerta   : true};
                        }
            else {
                        $scope.show = {sucesso  : false,
                                       alerta   : false};
                 }
        });
    };
        
    var init = function(){
        
        navigator.geolocation.getCurrentPosition(geoSuccess,geoError,geoOptions);

        $scope.envio = {email:'',
                       location: {lat: latitude, lng: longitude}};
        show();
    };
    
    var show = function(){
        $scope.show  = {sucesso : false,
                        alerta  : true};    
    };
    
    init();
    
};