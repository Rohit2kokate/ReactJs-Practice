const heading=React.createElement("h1",{
        className:"title"
    },"Heading 1");
    const heading1=React.createElement("h2",{
        className:"title"
    },"Heading 2");
    const container=React.createElement("div",{
        id:"container"
    },[heading,heading1]);
    // console.log(heading);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);