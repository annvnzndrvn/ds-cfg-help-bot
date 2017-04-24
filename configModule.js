 
module.exports = {

    readConfiguration = () => {
        
        var configurationItems;

        var url = "/assets/configuration.xls";
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";

        req.onload = () => {

          var arrayBuffer = req.response;

          var data = new Uint8Array(arrayBuffer);
          var array = new Array();

          for(var i = 0; i != data.length; ++i) array[i] = String.fromCharCode(data[i]);
          var bstr = array.join("");

          var workbook = read(bstr, {type:"binary"});

          var worksheet = workbook.Sheets['Sheet1'];

          let x = 0;
          for (let r in worksheet) {     

            let configParameterName = worksheet['B' + x];
            let configParameterValue = worksheet['C' + x];

            if (configParameterName != undefined && configParameterName.v != 'configParameter') {

              let configItem = { 
                parameter: configParameterName.v, value: configParameterValue.v 
              };
              
              configurationItems.push(configItem);        
          }        

          x++;
        }

        return configurationItems;
      }

      req.send();     
    
  }

}


 
        
