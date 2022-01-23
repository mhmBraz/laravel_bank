const sendRequisition = function (method,route,data,successFunction,errorFunction) {
    $.ajax({
        method: method,
        url: route,
        data: data,
        success: function success(response) {
            if (response.success) {
                if (successFunction) {
                    successFunction(response);
                } else {
                    handleRequestSuccess(response);
                }
            } else {
                if (errorFunction) {
                    errorFunction(response);
                } else {
                    handleRequestErrors(response);
                }
            }
        },
        error: function (response) {
        }
    });
}


const handleRequestErrors = function(response) {
    SweetAlert('error',response.message);
};

const handleRequestSuccess = function(response) {
    SweetAlert('success',response.message);
};

const SweetAlert = function (icon,text) {
    Swal.fire({
        icon: icon,
        text: text,
        timer: 3000,
    });
}

