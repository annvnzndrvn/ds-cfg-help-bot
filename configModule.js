var XLSX = require("ts-xlsx");

module.exports = {


    HttpClient: function () {
        this.get = function (url, callback) {

            var httpRequest = new XMLHttpRequest();

            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState == 4 && httpRequest.status == 200)
                    callback(httpRequest.responseText);
            }

            httpRequest.open("GET", url, true);
            httpRequest.send(null);
        }
    },

    readConfig: function() {
        
      var path = __dirname + '\\assets\\configuration.xls';
      var configurationItems = [];

      var workbook = XLSX.readFile(path, {type:"binary"});

      var worksheet = workbook.Sheets['Sheet1'];

      let x = 0;
      for (let r in worksheet) {     

        let configParameterName = worksheet['B' + x];
        let configParameterValue = worksheet['C' + x];
        let configParameterAdditionalValue = worksheet['D' + x];

        if (configParameterName != undefined && configParameterName.v != 'parameterName') {

          let configItem = { 
            parameter: configParameterName.v, value: configParameterValue.v 
          };

          configurationItems.push(configItem);        
        }        

        x++;
      }

      return configurationItems;        
        
    } 
      

}


 
        
