import $ from 'jquery';

function bootstrap(module, interface_) {
  console.error($('meta[name=dynamicUrl]')[0]);
  const dynamicUrl = $('meta[name=dynamicUrl]')[0].attributes.content.value
    + `?interface=${interface_}&query=${encodeURIComponent(document.location.search)}`;
  const request = $.ajax(dynamicUrl, {
    'dataType': 'json'
  });
  request.fail((jqXHR, textStatus) => {
    window.alert(`Failed to get the dynamic: ${textStatus}`);
  });
  request.done((dynamic) => {
    if (dynamic['doRedirect']) {
      const small_screen = window.matchMedia ? window.matchMedia('(max-width: 1024px)') : false;
      if (small_screen && (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
        window.location = dynamic['redirectUrl'];
      }
    }

    for (const name in dynamc['constants']) {
      module.constant(name, dynamc['constants'][name]);
    }

    angular.bootstrap(document, [exports.module.name]) 
  });
};

export default bootstrap
