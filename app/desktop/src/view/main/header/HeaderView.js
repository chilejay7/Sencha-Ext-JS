Ext.define('Ext_JS_App.view.main.header.HeaderView', {
    extend: 'Ext.Toolbar',
    xtype: 'headerview',
    cls: 'headerview',
    viewModel: {},
    items: [
        { 
            xtype: 'container',
            cls: 'headerviewtext',
            bind: { html: `{heading} - App Under Construction` }
        },
        '->',
        {
            xtype: 'button',
            ui: 'headerbutton',
            reference: 'detailtoggle',
            handler: 'onHeaderViewDetailToggle',
            iconCls: 'x-fa fa-arrow-left'
        }
    ]
});
