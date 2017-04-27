

module.exports = {

    retrieveAdminUser: function (users, adminID) {
       var adminUser = users.get(adminID);

       if (adminUser != null && adminUser != undefined)
        return adminUser;

       console.log("WARNING - no user admin found in config file - please set admin user's ID in config file");
       return null;
    }  

}


 
        
