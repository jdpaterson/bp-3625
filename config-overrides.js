module.exports = function override(config, env) {    
    console.log(config);
    config.watch = true;
    config["watchOptions"] = {} 
    config["watchOptions"]["ignored"] = /node_modules/
    return config;
  }