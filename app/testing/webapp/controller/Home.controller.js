sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], (Controller, MessageBox, MessageToast) => {
    "use strict";

    return Controller.extend("com.sap.testing.controller.Home", {
        onInit() {
        },

        /**Delete operation */
        onDelete: function () {
            let oModel = this.getView().getModel(),
                oSelectedItems = this.byId("idEmpTable").getSelectedItems();
            if (oSelectedItems.length < 1) {
                return MessageBox.warning("Pls select atleast one")
            }

            oSelectedItems.forEach(Item => {
                let oPath = Item.getBindingContext().getPath();
                oModel.remove(oPath, {
                    success: function () {
                        MessageToast.show("Successfully deleted")
                    }, error: function (oError) {
                        MessageBox.error("Error occurs!");

                    }

                });

            })

        }
    });
});