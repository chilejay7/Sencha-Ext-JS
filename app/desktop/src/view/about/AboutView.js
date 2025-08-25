Ext.define("Ext_JS_App.view.about.AboutView", {
    xtype: "aboutview",
    cls: "aboutview",
    controller: { type: "aboutviewcontoller" },
    viewModel: { type: "aboutviewmodel" },
    requries: [],
    extend: "Ext.Container",
    scrollable: true,
    html: 
    `<div>
    <h2>About Us</h2>
    <p>Thank you for visiting. This page is still under construction</h2>
    </div>`
})