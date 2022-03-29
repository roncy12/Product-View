(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);




function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");




















/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_16__["default"])('#modal')[0],
      modalOpen: false
    }; // Private properties

    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_17__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_17__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_15__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_15__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_19__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_18__["Validators"].setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_15__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_15__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_14___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page; // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead

    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_15__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_14___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_15__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_19__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_14___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(event.currentTarget).serialize()).split('&');
    queryParams = _url_utils__WEBPACK_IMPORTED_MODULE_15__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    } // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead


    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _url_utils__WEBPACK_IMPORTED_MODULE_15__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_14___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_15__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl); // If searchParams does not contain a page value then modify url query string to have page=1

    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }

    $(window).trigger('statechange');
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");














var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_13__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_12__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_12__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_12__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);

var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },

  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },

  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);




var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_3___default.a.parse(url, true);
    var param; // Let the formatter use the query object to build the new url

    parsed.search = null;

    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    return url__WEBPACK_IMPORTED_MODULE_3___default.a.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;

    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;

          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }

    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};

    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');

      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }

    return params;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");







function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    }) : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZm9ybS11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiQ2F0YWxvZ1BhZ2UiLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwidXJsIiwiVXJsIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsIiQiLCJjdXJyZW50VGFyZ2V0Iiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwidXJsVXRpbHMiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiUGFnZU1hbmFnZXIiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiYmxvY2tlclNlbGVjdG9yIiwiY2xlYXJGYWNldFNlbGVjdG9yIiwiY29tcG9uZW50U2VsZWN0b3IiLCJmYWNldE5hdkxpc3RTZWxlY3RvciIsInByaWNlUmFuZ2VFcnJvclNlbGVjdG9yIiwicHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IiLCJwcmljZVJhbmdlRm9ybVNlbGVjdG9yIiwicHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IiLCJwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvciIsInNob3dNb3JlVG9nZ2xlU2VsZWN0b3IiLCJmYWNldGVkU2VhcmNoRmlsdGVySXRlbXMiLCJtb2RhbCIsIm1vZGFsRmFjdG9yeSIsIm1vZGFsT3BlbiIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJzaG93IiwiYXBpIiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImlkIiwiYXR0ciIsImhhc01vcmVSZXN1bHRzIiwidG9nZ2xlRmFjZXRJdGVtcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsImxlbmd0aCIsInZhbGlkYXRvciIsIm5vZCIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwidW5iaW5kRXZlbnRzIiwib24iLCJvblBvcFN0YXRlIiwiZG9jdW1lbnQiLCJob29rcyIsIm9mZiIsIiRsaW5rIiwic3RvcFByb3BhZ2F0aW9uIiwiZ29Ub1VybCIsIiR0b2dnbGUiLCJ0b2dnbGVDbGFzcyIsInVybFF1ZXJ5UGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJwYXJzZVF1ZXJ5UGFyYW1zIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJjdXJyZW50VXJsIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiaGFzIiwibGlua1VybCIsInJlIiwidXBkYXRlZExpbmtVcmwiLCJyZXBsYWNlIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwidHJpZ2dlciIsImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiRmb3JtRmllbGQiLCJwYXJlbnQiLCJ0YWdOYW1lIiwicHJvcCIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCIkZm9ybSIsIiRpbnB1dHMiLCJmaW5kIiwiam9pbiIsIl9fIiwiZ2V0RmllbGRJZCIsIiRmaWVsZCIsImZpZWxkSWQiLCJtYXRjaCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCIkc3RhdGVGaWVsZCIsInN0YXRlRmllbGRBdHRycyIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhZnRlciIsInNldEVtYWlsVmFsaWRhdGlvbiIsImZpZWxkIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiZm9ybXMiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwiZXJyb3IiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInN1Y2Nlc3NDbGFzcyIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJrZXlzIiwiY2xhc3NlcyIsImZvckVhY2giLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJwdXNoU3RhdGUiLCJyZXBsYWNlUGFyYW1zIiwicGFyc2VkIiwicGFyYW0iLCJxdWVyeURhdGEiLCJvdXQiLCJBcnJheSIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciLCJpIiwidGVtcCIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwiaXRlbSIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJ1cGRhdGVDb3VudGVyTmF2IiwidXJsQ29udGV4dCIsImNvbXBhcmUiLCJodG1sIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJHRoaXMiLCJwcm9kdWN0c1RvQ29tcGFyZSIsInNob3dBbGVydE1vZGFsIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLFc7Ozs7Ozs7OztTQUNqQkMsYyxHQUFBLHdCQUFlQyxLQUFmLEVBQXNCO0FBQ2xCLFFBQU1DLEdBQUcsR0FBR0MsMENBQUcsQ0FBQ0MsS0FBSixDQUFVQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTFCLEVBQWdDLElBQWhDLENBQVo7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLENBQUMsQ0FBQ1IsS0FBSyxDQUFDUyxhQUFQLENBQUQsQ0FBdUJDLFNBQXZCLEdBQW1DQyxLQUFuQyxDQUF5QyxHQUF6QyxDQUFwQjtBQUVBVixPQUFHLENBQUNXLEtBQUosQ0FBVUwsV0FBVyxDQUFDLENBQUQsQ0FBckIsSUFBNEJBLFdBQVcsQ0FBQyxDQUFELENBQXZDO0FBQ0EsV0FBT04sR0FBRyxDQUFDVyxLQUFKLENBQVVDLElBQWpCO0FBRUFiLFNBQUssQ0FBQ2MsY0FBTjtBQUNBVixVQUFNLENBQUNDLFFBQVAsR0FBa0JILDBDQUFHLENBQUNhLE1BQUosQ0FBVztBQUFFQyxjQUFRLEVBQUVmLEdBQUcsQ0FBQ2UsUUFBaEI7QUFBMEJDLFlBQU0sRUFBRUMseURBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJsQixHQUFHLENBQUNXLEtBQTlCO0FBQWxDLEtBQVgsQ0FBbEI7QUFDSCxHOzs7RUFWb0NRLHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKekM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0lBQ01DLGE7QUFDRjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtLLElBQVYsQ0FBZSxvQ0FBZixDQUE3Qjs7QUFFQSxRQUFJb0Ysb0JBQW9CLENBQUNuSixNQUFyQixJQUErQixDQUFuQyxFQUFzQztBQUNsQ2tKLG1FQUFjLENBQUMsa0RBQUQsQ0FBZDtBQUNBLGFBQU8sS0FBUDtBQUNIO0FBQ0osR0FQRDtBQVFILEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3VybC11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgICAgICAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXG4gICAgICAgICAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxuICAgICAgICAgICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICAgICAgICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nLFxuICAgICAgICAgICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgICAgICAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgICAgICAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICAgICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUG9wU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50VXJsKTtcbiAgICAgICAgLy8gSWYgc2VhcmNoUGFyYW1zIGRvZXMgbm90IGNvbnRhaW4gYSBwYWdlIHZhbHVlIHRoZW4gbW9kaWZ5IHVybCBxdWVyeSBzdHJpbmcgdG8gaGF2ZSBwYWdlPTFcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdwYWdlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKCcucGFnaW5hdGlvbi1saW5rJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgY29uc3QgcmUgPSAvcGFnZT1bMC05XSsvaTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rVXJsID0gbGlua1VybC5yZXBsYWNlKHJlLCAncGFnZT0xJyk7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cGRhdGVkTGlua1VybCk7XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiY29uc3QgZm9ybXMgPSB7XG4gICAgZW1haWwodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmUgPSAvXi4rQC4rXFwuLisvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhIHBhc3N3b3JkIGZpZWxkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBmaWVsZCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgbm90RW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxuXG4gICAgcGFyc2VRdWVyeVBhcmFtczogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXJ5RGF0YVtpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFswXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbdGVtcFswXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXS5wdXNoKHRlbXBbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IFtwYXJhbXNbdGVtcFswXV0sIHRlbXBbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gdGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xuXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyBfLm1hcCgkY2hlY2tlZCwgZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKSA6IFtdO1xuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9