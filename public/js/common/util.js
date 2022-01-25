var sendRequisition = function sendRequisition(method, route, data, successFunction, errorFunction) {
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
    error: function error(response) {}
  });
};

var handleRequestErrors = function handleRequestErrors(response) {
  SweetAlert('error', response.message);
};

var handleRequestSuccess = function handleRequestSuccess(response) {
  SweetAlert('success', response.message);
};

var SweetAlert = function SweetAlert(icon, text) {
  Swal.fire({
    icon: icon,
    text: text,
    timer: 3000
  });
};
