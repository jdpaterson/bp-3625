import { Drawer, Button } from "@blueprintjs/core";
import React from "react";
import { useState } from "react";
import "./App.css";

export const App = () => {
  const [topDrawer, setTopDrawer] = useState(false)
  const [midDrawer, setMidDrawer] = useState(false)
  
  return (    
    <>
      <div className={"section --gray --static"} >
        <Button 
          onClick={() => setTopDrawer(!topDrawer)} 
          text={"Toggle with static parent"} 
          intent={"danger"} 
        />
        <Drawer 
          isOpen={topDrawer} 
          usePortal={false} 
          onClose={() => setTopDrawer(!topDrawer)} 
        >
          {"This should render inside the top panel"}
        </Drawer>
      </div>
      <div className={"section --blue --relative"} >
        <Button 
          onClick={() => setMidDrawer(!midDrawer)} 
          text={"Toggle with relative parent"} intent={"success"} 
        />
        <Drawer 
          isOpen={midDrawer}
          usePortal={false} 
          onClose={() => setMidDrawer(!midDrawer)} 
        >
          {"This should render inside the mid panel"}
        </Drawer>
      </div>
      <div className={"section --gray"} />
    </>
  );
}

export default App;
