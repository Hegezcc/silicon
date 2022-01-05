;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    './node_modules/@storybook/components/dist/esm/tooltip/WithTooltip.js': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'WithTooltipPure', function () {
          return WithTooltip_WithTooltipPure
        }),
        __webpack_require__.d(__webpack_exports__, 'WithToolTipState', function () {
          return WithTooltip_WithToolTipState
        }),
        __webpack_require__.d(__webpack_exports__, 'WithTooltip', function () {
          return WithTooltip_WithToolTipState
        })
      __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.freeze.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js')
      var react = __webpack_require__('./node_modules/react/index.js'),
        react_default = __webpack_require__.n(react),
        esm = __webpack_require__('./node_modules/@storybook/theming/dist/esm/index.js'),
        global_window = __webpack_require__('./node_modules/global/window.js'),
        window_default = __webpack_require__.n(global_window),
        objectWithoutPropertiesLoose = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js',
        ),
        esm_extends = __webpack_require__('./node_modules/@babel/runtime/helpers/esm/extends.js'),
        inheritsLoose = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/inheritsLoose.js',
        ),
        react_dom = __webpack_require__('./node_modules/react-dom/index.js'),
        ManagerReferenceNodeContext = react.createContext(),
        ManagerReferenceNodeSetterContext = react.createContext()
      function Manager(_ref) {
        var children = _ref.children,
          _React$useState = react.useState(null),
          referenceNode = _React$useState[0],
          setReferenceNode = _React$useState[1],
          hasUnmounted = react.useRef(!1)
        react.useEffect(function () {
          return function () {
            hasUnmounted.current = !0
          }
        }, [])
        var handleSetReferenceNode = react.useCallback(function (node) {
          hasUnmounted.current || setReferenceNode(node)
        }, [])
        return react.createElement(
          ManagerReferenceNodeContext.Provider,
          { value: referenceNode },
          react.createElement(
            ManagerReferenceNodeSetterContext.Provider,
            { value: handleSetReferenceNode },
            children,
          ),
        )
      }
      var unwrapArray = function unwrapArray(arg) {
          return Array.isArray(arg) ? arg[0] : arg
        },
        safeInvoke = function safeInvoke(fn) {
          if ('function' == typeof fn) {
            for (
              var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
              _key < _len;
              _key++
            )
              args[_key - 1] = arguments[_key]
            return fn.apply(void 0, args)
          }
        },
        setRef = function setRef(ref, node) {
          if ('function' == typeof ref) return safeInvoke(ref, node)
          null != ref && (ref.current = node)
        },
        fromEntries = function fromEntries(entries) {
          return entries.reduce(function (acc, _ref) {
            var key = _ref[0],
              value = _ref[1]
            return (acc[key] = value), acc
          }, {})
        },
        useIsomorphicLayoutEffect =
          'undefined' != typeof window && window.document && window.document.createElement
            ? react.useLayoutEffect
            : react.useEffect
      function getWindow(node) {
        if (null == node) return window
        if ('[object Window]' !== node.toString()) {
          var ownerDocument = node.ownerDocument
          return (ownerDocument && ownerDocument.defaultView) || window
        }
        return node
      }
      function isElement(node) {
        return node instanceof getWindow(node).Element || node instanceof Element
      }
      function isHTMLElement(node) {
        return node instanceof getWindow(node).HTMLElement || node instanceof HTMLElement
      }
      function isShadowRoot(node) {
        return (
          'undefined' != typeof ShadowRoot &&
          (node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot)
        )
      }
      var math_max = Math.max,
        math_min = Math.min,
        round = Math.round
      function getBoundingClientRect(element, includeScale) {
        void 0 === includeScale && (includeScale = !1)
        var rect = element.getBoundingClientRect(),
          scaleX = 1,
          scaleY = 1
        if (isHTMLElement(element) && includeScale) {
          var offsetHeight = element.offsetHeight,
            offsetWidth = element.offsetWidth
          offsetWidth > 0 && (scaleX = round(rect.width) / offsetWidth || 1),
            offsetHeight > 0 && (scaleY = round(rect.height) / offsetHeight || 1)
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY,
        }
      }
      function getWindowScroll(node) {
        var win = getWindow(node)
        return { scrollLeft: win.pageXOffset, scrollTop: win.pageYOffset }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || '').toLowerCase() : null
      }
      function getDocumentElement(element) {
        return ((isElement(element) ? element.ownerDocument : element.document) || window.document)
          .documentElement
      }
      function getWindowScrollBarX(element) {
        return (
          getBoundingClientRect(getDocumentElement(element)).left +
          getWindowScroll(element).scrollLeft
        )
      }
      function getComputedStyle(element) {
        return getWindow(element).getComputedStyle(element)
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle(element),
          overflow = _getComputedStyle.overflow,
          overflowX = _getComputedStyle.overflowX,
          overflowY = _getComputedStyle.overflowY
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        void 0 === isFixed && (isFixed = !1)
        var isOffsetParentAnElement = isHTMLElement(offsetParent),
          offsetParentIsScaled =
            isHTMLElement(offsetParent) &&
            (function isElementScaled(element) {
              var rect = element.getBoundingClientRect(),
                scaleX = round(rect.width) / element.offsetWidth || 1,
                scaleY = round(rect.height) / element.offsetHeight || 1
              return 1 !== scaleX || 1 !== scaleY
            })(offsetParent),
          documentElement = getDocumentElement(offsetParent),
          rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled),
          scroll = { scrollLeft: 0, scrollTop: 0 },
          offsets = { x: 0, y: 0 }
        return (
          (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) &&
            (('body' !== getNodeName(offsetParent) || isScrollParent(documentElement)) &&
              (scroll = (function getNodeScroll(node) {
                return node !== getWindow(node) && isHTMLElement(node)
                  ? (function getHTMLElementScroll(element) {
                      return { scrollLeft: element.scrollLeft, scrollTop: element.scrollTop }
                    })(node)
                  : getWindowScroll(node)
              })(offsetParent)),
            isHTMLElement(offsetParent)
              ? (((offsets = getBoundingClientRect(offsetParent, !0)).x += offsetParent.clientLeft),
                (offsets.y += offsetParent.clientTop))
              : documentElement && (offsets.x = getWindowScrollBarX(documentElement))),
          {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height,
          }
        )
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element),
          width = element.offsetWidth,
          height = element.offsetHeight
        return (
          Math.abs(clientRect.width - width) <= 1 && (width = clientRect.width),
          Math.abs(clientRect.height - height) <= 1 && (height = clientRect.height),
          { x: element.offsetLeft, y: element.offsetTop, width: width, height: height }
        )
      }
      function getParentNode(element) {
        return 'html' === getNodeName(element)
          ? element
          : element.assignedSlot ||
              element.parentNode ||
              (isShadowRoot(element) ? element.host : null) ||
              getDocumentElement(element)
      }
      function getScrollParent(node) {
        return ['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0
          ? node.ownerDocument.body
          : isHTMLElement(node) && isScrollParent(node)
          ? node
          : getScrollParent(getParentNode(node))
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen
        void 0 === list && (list = [])
        var scrollParent = getScrollParent(element),
          isBody =
            scrollParent ===
            (null == (_element$ownerDocumen = element.ownerDocument)
              ? void 0
              : _element$ownerDocumen.body),
          win = getWindow(scrollParent),
          target = isBody
            ? [win].concat(
                win.visualViewport || [],
                isScrollParent(scrollParent) ? scrollParent : [],
              )
            : scrollParent,
          updatedList = list.concat(target)
        return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)))
      }
      function isTableElement(element) {
        return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0
      }
      function getTrueOffsetParent(element) {
        return isHTMLElement(element) && 'fixed' !== getComputedStyle(element).position
          ? element.offsetParent
          : null
      }
      function getOffsetParent(element) {
        for (
          var window = getWindow(element), offsetParent = getTrueOffsetParent(element);
          offsetParent &&
          isTableElement(offsetParent) &&
          'static' === getComputedStyle(offsetParent).position;

        )
          offsetParent = getTrueOffsetParent(offsetParent)
        return offsetParent &&
          ('html' === getNodeName(offsetParent) ||
            ('body' === getNodeName(offsetParent) &&
              'static' === getComputedStyle(offsetParent).position))
          ? window
          : offsetParent ||
              (function getContainingBlock(element) {
                var isFirefox = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
                if (
                  -1 !== navigator.userAgent.indexOf('Trident') &&
                  isHTMLElement(element) &&
                  'fixed' === getComputedStyle(element).position
                )
                  return null
                for (
                  var currentNode = getParentNode(element);
                  isHTMLElement(currentNode) &&
                  ['html', 'body'].indexOf(getNodeName(currentNode)) < 0;

                ) {
                  var css = getComputedStyle(currentNode)
                  if (
                    'none' !== css.transform ||
                    'none' !== css.perspective ||
                    'paint' === css.contain ||
                    -1 !== ['transform', 'perspective'].indexOf(css.willChange) ||
                    (isFirefox && 'filter' === css.willChange) ||
                    (isFirefox && css.filter && 'none' !== css.filter)
                  )
                    return currentNode
                  currentNode = currentNode.parentNode
                }
                return null
              })(element) ||
              window
      }
      var enums = __webpack_require__('./node_modules/@popperjs/core/lib/enums.js')
      function order(modifiers) {
        var map = new Map(),
          visited = new Set(),
          result = []
        function sort(modifier) {
          visited.add(modifier.name),
            []
              .concat(modifier.requires || [], modifier.requiresIfExists || [])
              .forEach(function (dep) {
                if (!visited.has(dep)) {
                  var depModifier = map.get(dep)
                  depModifier && sort(depModifier)
                }
              }),
            result.push(modifier)
        }
        return (
          modifiers.forEach(function (modifier) {
            map.set(modifier.name, modifier)
          }),
          modifiers.forEach(function (modifier) {
            visited.has(modifier.name) || sort(modifier)
          }),
          result
        )
      }
      var DEFAULT_OPTIONS = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
          args[_key] = arguments[_key]
        return !args.some(function (element) {
          return !(element && 'function' == typeof element.getBoundingClientRect)
        })
      }
      function popperGenerator(generatorOptions) {
        void 0 === generatorOptions && (generatorOptions = {})
        var _generatorOptions = generatorOptions,
          _generatorOptions$def = _generatorOptions.defaultModifiers,
          defaultModifiers = void 0 === _generatorOptions$def ? [] : _generatorOptions$def,
          _generatorOptions$def2 = _generatorOptions.defaultOptions,
          defaultOptions =
            void 0 === _generatorOptions$def2 ? DEFAULT_OPTIONS : _generatorOptions$def2
        return function createPopper(reference, popper, options) {
          void 0 === options && (options = defaultOptions)
          var fn,
            pending,
            state = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
              modifiersData: {},
              elements: { reference: reference, popper: popper },
              attributes: {},
              styles: {},
            },
            effectCleanupFns = [],
            isDestroyed = !1,
            instance = {
              state: state,
              setOptions: function setOptions(setOptionsAction) {
                var options =
                  'function' == typeof setOptionsAction
                    ? setOptionsAction(state.options)
                    : setOptionsAction
                cleanupModifierEffects(),
                  (state.options = Object.assign({}, defaultOptions, state.options, options)),
                  (state.scrollParents = {
                    reference: isElement(reference)
                      ? listScrollParents(reference)
                      : reference.contextElement
                      ? listScrollParents(reference.contextElement)
                      : [],
                    popper: listScrollParents(popper),
                  })
                var orderedModifiers = (function orderModifiers(modifiers) {
                  var orderedModifiers = order(modifiers)
                  return enums.g.reduce(function (acc, phase) {
                    return acc.concat(
                      orderedModifiers.filter(function (modifier) {
                        return modifier.phase === phase
                      }),
                    )
                  }, [])
                })(
                  (function mergeByName(modifiers) {
                    var merged = modifiers.reduce(function (merged, current) {
                      var existing = merged[current.name]
                      return (
                        (merged[current.name] = existing
                          ? Object.assign({}, existing, current, {
                              options: Object.assign({}, existing.options, current.options),
                              data: Object.assign({}, existing.data, current.data),
                            })
                          : current),
                        merged
                      )
                    }, {})
                    return Object.keys(merged).map(function (key) {
                      return merged[key]
                    })
                  })([].concat(defaultModifiers, state.options.modifiers)),
                )
                return (
                  (state.orderedModifiers = orderedModifiers.filter(function (m) {
                    return m.enabled
                  })),
                  (function runModifierEffects() {
                    state.orderedModifiers.forEach(function (_ref3) {
                      var name = _ref3.name,
                        _ref3$options = _ref3.options,
                        options = void 0 === _ref3$options ? {} : _ref3$options,
                        effect = _ref3.effect
                      if ('function' == typeof effect) {
                        var cleanupFn = effect({
                            state: state,
                            name: name,
                            instance: instance,
                            options: options,
                          }),
                          noopFn = function noopFn() {}
                        effectCleanupFns.push(cleanupFn || noopFn)
                      }
                    })
                  })(),
                  instance.update()
                )
              },
              forceUpdate: function forceUpdate() {
                if (!isDestroyed) {
                  var _state$elements = state.elements,
                    reference = _state$elements.reference,
                    popper = _state$elements.popper
                  if (areValidElements(reference, popper)) {
                    ;(state.rects = {
                      reference: getCompositeRect(
                        reference,
                        getOffsetParent(popper),
                        'fixed' === state.options.strategy,
                      ),
                      popper: getLayoutRect(popper),
                    }),
                      (state.reset = !1),
                      (state.placement = state.options.placement),
                      state.orderedModifiers.forEach(function (modifier) {
                        return (state.modifiersData[modifier.name] = Object.assign(
                          {},
                          modifier.data,
                        ))
                      })
                    for (var index = 0; index < state.orderedModifiers.length; index++)
                      if (!0 !== state.reset) {
                        var _state$orderedModifie = state.orderedModifiers[index],
                          fn = _state$orderedModifie.fn,
                          _state$orderedModifie2 = _state$orderedModifie.options,
                          _options =
                            void 0 === _state$orderedModifie2 ? {} : _state$orderedModifie2,
                          name = _state$orderedModifie.name
                        'function' == typeof fn &&
                          (state =
                            fn({
                              state: state,
                              options: _options,
                              name: name,
                              instance: instance,
                            }) || state)
                      } else (state.reset = !1), (index = -1)
                  }
                }
              },
              update:
                ((fn = function () {
                  return new Promise(function (resolve) {
                    instance.forceUpdate(), resolve(state)
                  })
                }),
                function () {
                  return (
                    pending ||
                      (pending = new Promise(function (resolve) {
                        Promise.resolve().then(function () {
                          ;(pending = void 0), resolve(fn())
                        })
                      })),
                    pending
                  )
                }),
              destroy: function destroy() {
                cleanupModifierEffects(), (isDestroyed = !0)
              },
            }
          if (!areValidElements(reference, popper)) return instance
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function (fn) {
              return fn()
            }),
              (effectCleanupFns = [])
          }
          return (
            instance.setOptions(options).then(function (state) {
              !isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state)
            }),
            instance
          )
        }
      }
      var passive = { passive: !0 }
      function getBasePlacement(placement) {
        return placement.split('-')[0]
      }
      function getVariation(placement) {
        return placement.split('-')[1]
      }
      function getMainAxisFromPlacement(placement) {
        return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y'
      }
      function computeOffsets(_ref) {
        var offsets,
          reference = _ref.reference,
          element = _ref.element,
          placement = _ref.placement,
          basePlacement = placement ? getBasePlacement(placement) : null,
          variation = placement ? getVariation(placement) : null,
          commonX = reference.x + reference.width / 2 - element.width / 2,
          commonY = reference.y + reference.height / 2 - element.height / 2
        switch (basePlacement) {
          case enums.m:
            offsets = { x: commonX, y: reference.y - element.height }
            break
          case enums.c:
            offsets = { x: commonX, y: reference.y + reference.height }
            break
          case enums.k:
            offsets = { x: reference.x + reference.width, y: commonY }
            break
          case enums.f:
            offsets = { x: reference.x - element.width, y: commonY }
            break
          default:
            offsets = { x: reference.x, y: reference.y }
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null
        if (null != mainAxis) {
          var len = 'y' === mainAxis ? 'height' : 'width'
          switch (variation) {
            case enums.l:
              offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2)
              break
            case enums.e:
              offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2)
          }
        }
        return offsets
      }
      var unsetSides = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
      function mapToStyles(_ref2) {
        var _Object$assign2,
          popper = _ref2.popper,
          popperRect = _ref2.popperRect,
          placement = _ref2.placement,
          variation = _ref2.variation,
          offsets = _ref2.offsets,
          position = _ref2.position,
          gpuAcceleration = _ref2.gpuAcceleration,
          adaptive = _ref2.adaptive,
          roundOffsets = _ref2.roundOffsets,
          isFixed = _ref2.isFixed,
          _offsets$x = offsets.x,
          x = void 0 === _offsets$x ? 0 : _offsets$x,
          _offsets$y = offsets.y,
          y = void 0 === _offsets$y ? 0 : _offsets$y,
          _ref3 = 'function' == typeof roundOffsets ? roundOffsets({ x: x, y: y }) : { x: x, y: y }
        ;(x = _ref3.x), (y = _ref3.y)
        var hasX = offsets.hasOwnProperty('x'),
          hasY = offsets.hasOwnProperty('y'),
          sideX = enums.f,
          sideY = enums.m,
          win = window
        if (adaptive) {
          var offsetParent = getOffsetParent(popper),
            heightProp = 'clientHeight',
            widthProp = 'clientWidth'
          if (
            (offsetParent === getWindow(popper) &&
              'static' !== getComputedStyle((offsetParent = getDocumentElement(popper))).position &&
              'absolute' === position &&
              ((heightProp = 'scrollHeight'), (widthProp = 'scrollWidth')),
            (offsetParent = offsetParent),
            placement === enums.m ||
              ((placement === enums.f || placement === enums.k) && variation === enums.e))
          )
            (sideY = enums.c),
              (y -=
                (isFixed && win.visualViewport
                  ? win.visualViewport.height
                  : offsetParent[heightProp]) - popperRect.height),
              (y *= gpuAcceleration ? 1 : -1)
          if (
            placement === enums.f ||
            ((placement === enums.m || placement === enums.c) && variation === enums.e)
          )
            (sideX = enums.k),
              (x -=
                (isFixed && win.visualViewport
                  ? win.visualViewport.width
                  : offsetParent[widthProp]) - popperRect.width),
              (x *= gpuAcceleration ? 1 : -1)
        }
        var _Object$assign,
          commonStyles = Object.assign({ position: position }, adaptive && unsetSides),
          _ref4 =
            !0 === roundOffsets
              ? (function roundOffsetsByDPR(_ref) {
                  var x = _ref.x,
                    y = _ref.y,
                    dpr = window.devicePixelRatio || 1
                  return { x: round(x * dpr) / dpr || 0, y: round(y * dpr) / dpr || 0 }
                })({ x: x, y: y })
              : { x: x, y: y }
        return (
          (x = _ref4.x),
          (y = _ref4.y),
          gpuAcceleration
            ? Object.assign(
                {},
                commonStyles,
                (((_Object$assign = {})[sideY] = hasY ? '0' : ''),
                (_Object$assign[sideX] = hasX ? '0' : ''),
                (_Object$assign.transform =
                  (win.devicePixelRatio || 1) <= 1
                    ? 'translate(' + x + 'px, ' + y + 'px)'
                    : 'translate3d(' + x + 'px, ' + y + 'px, 0)'),
                _Object$assign),
              )
            : Object.assign(
                {},
                commonStyles,
                (((_Object$assign2 = {})[sideY] = hasY ? y + 'px' : ''),
                (_Object$assign2[sideX] = hasX ? x + 'px' : ''),
                (_Object$assign2.transform = ''),
                _Object$assign2),
              )
        )
      }
      var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function (matched) {
          return hash[matched]
        })
      }
      var getOppositeVariationPlacement_hash = { start: 'end', end: 'start' }
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function (matched) {
          return getOppositeVariationPlacement_hash[matched]
        })
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode()
        if (parent.contains(child)) return !0
        if (rootNode && isShadowRoot(rootNode)) {
          var next = child
          do {
            if (next && parent.isSameNode(next)) return !0
            next = next.parentNode || next.host
          } while (next)
        }
        return !1
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height,
        })
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === enums.o
          ? rectToClientRect(
              (function getViewportRect(element) {
                var win = getWindow(element),
                  html = getDocumentElement(element),
                  visualViewport = win.visualViewport,
                  width = html.clientWidth,
                  height = html.clientHeight,
                  x = 0,
                  y = 0
                return (
                  visualViewport &&
                    ((width = visualViewport.width),
                    (height = visualViewport.height),
                    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                      ((x = visualViewport.offsetLeft), (y = visualViewport.offsetTop))),
                  { width: width, height: height, x: x + getWindowScrollBarX(element), y: y }
                )
              })(element),
            )
          : isElement(clippingParent)
          ? (function getInnerBoundingClientRect(element) {
              var rect = getBoundingClientRect(element)
              return (
                (rect.top = rect.top + element.clientTop),
                (rect.left = rect.left + element.clientLeft),
                (rect.bottom = rect.top + element.clientHeight),
                (rect.right = rect.left + element.clientWidth),
                (rect.width = element.clientWidth),
                (rect.height = element.clientHeight),
                (rect.x = rect.left),
                (rect.y = rect.top),
                rect
              )
            })(clippingParent)
          : rectToClientRect(
              (function getDocumentRect(element) {
                var _element$ownerDocumen,
                  html = getDocumentElement(element),
                  winScroll = getWindowScroll(element),
                  body =
                    null == (_element$ownerDocumen = element.ownerDocument)
                      ? void 0
                      : _element$ownerDocumen.body,
                  width = math_max(
                    html.scrollWidth,
                    html.clientWidth,
                    body ? body.scrollWidth : 0,
                    body ? body.clientWidth : 0,
                  ),
                  height = math_max(
                    html.scrollHeight,
                    html.clientHeight,
                    body ? body.scrollHeight : 0,
                    body ? body.clientHeight : 0,
                  ),
                  x = -winScroll.scrollLeft + getWindowScrollBarX(element),
                  y = -winScroll.scrollTop
                return (
                  'rtl' === getComputedStyle(body || html).direction &&
                    (x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width),
                  { width: width, height: height, x: x, y: y }
                )
              })(getDocumentElement(element)),
            )
      }
      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents =
            'clippingParents' === boundary
              ? (function getClippingParents(element) {
                  var clippingParents = listScrollParents(getParentNode(element)),
                    clipperElement =
                      ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0 &&
                      isHTMLElement(element)
                        ? getOffsetParent(element)
                        : element
                  return isElement(clipperElement)
                    ? clippingParents.filter(function (clippingParent) {
                        return (
                          isElement(clippingParent) &&
                          contains(clippingParent, clipperElement) &&
                          'body' !== getNodeName(clippingParent)
                        )
                      })
                    : []
                })(element)
              : [].concat(boundary),
          clippingParents = [].concat(mainClippingParents, [rootBoundary]),
          firstClippingParent = clippingParents[0],
          clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
            var rect = getClientRectFromMixedType(element, clippingParent)
            return (
              (accRect.top = math_max(rect.top, accRect.top)),
              (accRect.right = math_min(rect.right, accRect.right)),
              (accRect.bottom = math_min(rect.bottom, accRect.bottom)),
              (accRect.left = math_max(rect.left, accRect.left)),
              accRect
            )
          }, getClientRectFromMixedType(element, firstClippingParent))
        return (
          (clippingRect.width = clippingRect.right - clippingRect.left),
          (clippingRect.height = clippingRect.bottom - clippingRect.top),
          (clippingRect.x = clippingRect.left),
          (clippingRect.y = clippingRect.top),
          clippingRect
        )
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, paddingObject)
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function (hashMap, key) {
          return (hashMap[key] = value), hashMap
        }, {})
      }
      function detectOverflow(state, options) {
        void 0 === options && (options = {})
        var _options = options,
          _options$placement = _options.placement,
          placement = void 0 === _options$placement ? state.placement : _options$placement,
          _options$boundary = _options.boundary,
          boundary = void 0 === _options$boundary ? enums.d : _options$boundary,
          _options$rootBoundary = _options.rootBoundary,
          rootBoundary = void 0 === _options$rootBoundary ? enums.o : _options$rootBoundary,
          _options$elementConte = _options.elementContext,
          elementContext = void 0 === _options$elementConte ? enums.i : _options$elementConte,
          _options$altBoundary = _options.altBoundary,
          altBoundary = void 0 !== _options$altBoundary && _options$altBoundary,
          _options$padding = _options.padding,
          padding = void 0 === _options$padding ? 0 : _options$padding,
          paddingObject = mergePaddingObject(
            'number' != typeof padding ? padding : expandToHashMap(padding, enums.b),
          ),
          altContext = elementContext === enums.i ? enums.j : enums.i,
          popperRect = state.rects.popper,
          element = state.elements[altBoundary ? altContext : elementContext],
          clippingClientRect = getClippingRect(
            isElement(element)
              ? element
              : element.contextElement || getDocumentElement(state.elements.popper),
            boundary,
            rootBoundary,
          ),
          referenceClientRect = getBoundingClientRect(state.elements.reference),
          popperOffsets = computeOffsets({
            reference: referenceClientRect,
            element: popperRect,
            strategy: 'absolute',
            placement: placement,
          }),
          popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets)),
          elementClientRect = elementContext === enums.i ? popperClientRect : referenceClientRect,
          overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right,
          },
          offsetData = state.modifiersData.offset
        if (elementContext === enums.i && offsetData) {
          var offset = offsetData[placement]
          Object.keys(overflowOffsets).forEach(function (key) {
            var multiply = [enums.k, enums.c].indexOf(key) >= 0 ? 1 : -1,
              axis = [enums.m, enums.c].indexOf(key) >= 0 ? 'y' : 'x'
            overflowOffsets[key] += offset[axis] * multiply
          })
        }
        return overflowOffsets
      }
      function within(min, value, max) {
        return math_max(min, math_min(value, max))
      }
      function getSideOffsets(overflow, rect, preventedOffsets) {
        return (
          void 0 === preventedOffsets && (preventedOffsets = { x: 0, y: 0 }),
          {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x,
          }
        )
      }
      function isAnySideFullyClipped(overflow) {
        return [enums.m, enums.k, enums.c, enums.f].some(function (side) {
          return overflow[side] >= 0
        })
      }
      var popper_createPopper = popperGenerator({
          defaultModifiers: [
            {
              name: 'eventListeners',
              enabled: !0,
              phase: 'write',
              fn: function fn() {},
              effect: function effect(_ref) {
                var state = _ref.state,
                  instance = _ref.instance,
                  options = _ref.options,
                  _options$scroll = options.scroll,
                  scroll = void 0 === _options$scroll || _options$scroll,
                  _options$resize = options.resize,
                  resize = void 0 === _options$resize || _options$resize,
                  window = getWindow(state.elements.popper),
                  scrollParents = [].concat(
                    state.scrollParents.reference,
                    state.scrollParents.popper,
                  )
                return (
                  scroll &&
                    scrollParents.forEach(function (scrollParent) {
                      scrollParent.addEventListener('scroll', instance.update, passive)
                    }),
                  resize && window.addEventListener('resize', instance.update, passive),
                  function () {
                    scroll &&
                      scrollParents.forEach(function (scrollParent) {
                        scrollParent.removeEventListener('scroll', instance.update, passive)
                      }),
                      resize && window.removeEventListener('resize', instance.update, passive)
                  }
                )
              },
              data: {},
            },
            {
              name: 'popperOffsets',
              enabled: !0,
              phase: 'read',
              fn: function popperOffsets_popperOffsets(_ref) {
                var state = _ref.state,
                  name = _ref.name
                state.modifiersData[name] = computeOffsets({
                  reference: state.rects.reference,
                  element: state.rects.popper,
                  strategy: 'absolute',
                  placement: state.placement,
                })
              },
              data: {},
            },
            {
              name: 'computeStyles',
              enabled: !0,
              phase: 'beforeWrite',
              fn: function computeStyles(_ref5) {
                var state = _ref5.state,
                  options = _ref5.options,
                  _options$gpuAccelerat = options.gpuAcceleration,
                  gpuAcceleration = void 0 === _options$gpuAccelerat || _options$gpuAccelerat,
                  _options$adaptive = options.adaptive,
                  adaptive = void 0 === _options$adaptive || _options$adaptive,
                  _options$roundOffsets = options.roundOffsets,
                  roundOffsets = void 0 === _options$roundOffsets || _options$roundOffsets,
                  commonStyles = {
                    placement: getBasePlacement(state.placement),
                    variation: getVariation(state.placement),
                    popper: state.elements.popper,
                    popperRect: state.rects.popper,
                    gpuAcceleration: gpuAcceleration,
                    isFixed: 'fixed' === state.options.strategy,
                  }
                null != state.modifiersData.popperOffsets &&
                  (state.styles.popper = Object.assign(
                    {},
                    state.styles.popper,
                    mapToStyles(
                      Object.assign({}, commonStyles, {
                        offsets: state.modifiersData.popperOffsets,
                        position: state.options.strategy,
                        adaptive: adaptive,
                        roundOffsets: roundOffsets,
                      }),
                    ),
                  )),
                  null != state.modifiersData.arrow &&
                    (state.styles.arrow = Object.assign(
                      {},
                      state.styles.arrow,
                      mapToStyles(
                        Object.assign({}, commonStyles, {
                          offsets: state.modifiersData.arrow,
                          position: 'absolute',
                          adaptive: !1,
                          roundOffsets: roundOffsets,
                        }),
                      ),
                    )),
                  (state.attributes.popper = Object.assign({}, state.attributes.popper, {
                    'data-popper-placement': state.placement,
                  }))
              },
              data: {},
            },
            {
              name: 'applyStyles',
              enabled: !0,
              phase: 'write',
              fn: function applyStyles(_ref) {
                var state = _ref.state
                Object.keys(state.elements).forEach(function (name) {
                  var style = state.styles[name] || {},
                    attributes = state.attributes[name] || {},
                    element = state.elements[name]
                  isHTMLElement(element) &&
                    getNodeName(element) &&
                    (Object.assign(element.style, style),
                    Object.keys(attributes).forEach(function (name) {
                      var value = attributes[name]
                      !1 === value
                        ? element.removeAttribute(name)
                        : element.setAttribute(name, !0 === value ? '' : value)
                    }))
                })
              },
              effect: function applyStyles_effect(_ref2) {
                var state = _ref2.state,
                  initialStyles = {
                    popper: { position: state.options.strategy, left: '0', top: '0', margin: '0' },
                    arrow: { position: 'absolute' },
                    reference: {},
                  }
                return (
                  Object.assign(state.elements.popper.style, initialStyles.popper),
                  (state.styles = initialStyles),
                  state.elements.arrow &&
                    Object.assign(state.elements.arrow.style, initialStyles.arrow),
                  function () {
                    Object.keys(state.elements).forEach(function (name) {
                      var element = state.elements[name],
                        attributes = state.attributes[name] || {},
                        style = Object.keys(
                          state.styles.hasOwnProperty(name)
                            ? state.styles[name]
                            : initialStyles[name],
                        ).reduce(function (style, property) {
                          return (style[property] = ''), style
                        }, {})
                      isHTMLElement(element) &&
                        getNodeName(element) &&
                        (Object.assign(element.style, style),
                        Object.keys(attributes).forEach(function (attribute) {
                          element.removeAttribute(attribute)
                        }))
                    })
                  }
                )
              },
              requires: ['computeStyles'],
            },
            {
              name: 'offset',
              enabled: !0,
              phase: 'main',
              requires: ['popperOffsets'],
              fn: function offset_offset(_ref2) {
                var state = _ref2.state,
                  options = _ref2.options,
                  name = _ref2.name,
                  _options$offset = options.offset,
                  offset = void 0 === _options$offset ? [0, 0] : _options$offset,
                  data = enums.h.reduce(function (acc, placement) {
                    return (
                      (acc[placement] = (function distanceAndSkiddingToXY(
                        placement,
                        rects,
                        offset,
                      ) {
                        var basePlacement = getBasePlacement(placement),
                          invertDistance = [enums.f, enums.m].indexOf(basePlacement) >= 0 ? -1 : 1,
                          _ref =
                            'function' == typeof offset
                              ? offset(Object.assign({}, rects, { placement: placement }))
                              : offset,
                          skidding = _ref[0],
                          distance = _ref[1]
                        return (
                          (skidding = skidding || 0),
                          (distance = (distance || 0) * invertDistance),
                          [enums.f, enums.k].indexOf(basePlacement) >= 0
                            ? { x: distance, y: skidding }
                            : { x: skidding, y: distance }
                        )
                      })(placement, state.rects, offset)),
                      acc
                    )
                  }, {}),
                  _data$state$placement = data[state.placement],
                  x = _data$state$placement.x,
                  y = _data$state$placement.y
                null != state.modifiersData.popperOffsets &&
                  ((state.modifiersData.popperOffsets.x += x),
                  (state.modifiersData.popperOffsets.y += y)),
                  (state.modifiersData[name] = data)
              },
            },
            {
              name: 'flip',
              enabled: !0,
              phase: 'main',
              fn: function flip(_ref) {
                var state = _ref.state,
                  options = _ref.options,
                  name = _ref.name
                if (!state.modifiersData[name]._skip) {
                  for (
                    var _options$mainAxis = options.mainAxis,
                      checkMainAxis = void 0 === _options$mainAxis || _options$mainAxis,
                      _options$altAxis = options.altAxis,
                      checkAltAxis = void 0 === _options$altAxis || _options$altAxis,
                      specifiedFallbackPlacements = options.fallbackPlacements,
                      padding = options.padding,
                      boundary = options.boundary,
                      rootBoundary = options.rootBoundary,
                      altBoundary = options.altBoundary,
                      _options$flipVariatio = options.flipVariations,
                      flipVariations = void 0 === _options$flipVariatio || _options$flipVariatio,
                      allowedAutoPlacements = options.allowedAutoPlacements,
                      preferredPlacement = state.options.placement,
                      basePlacement = getBasePlacement(preferredPlacement),
                      fallbackPlacements =
                        specifiedFallbackPlacements ||
                        (basePlacement === preferredPlacement || !flipVariations
                          ? [getOppositePlacement(preferredPlacement)]
                          : (function getExpandedFallbackPlacements(placement) {
                              if (getBasePlacement(placement) === enums.a) return []
                              var oppositePlacement = getOppositePlacement(placement)
                              return [
                                getOppositeVariationPlacement(placement),
                                oppositePlacement,
                                getOppositeVariationPlacement(oppositePlacement),
                              ]
                            })(preferredPlacement)),
                      placements = [preferredPlacement]
                        .concat(fallbackPlacements)
                        .reduce(function (acc, placement) {
                          return acc.concat(
                            getBasePlacement(placement) === enums.a
                              ? (function computeAutoPlacement(state, options) {
                                  void 0 === options && (options = {})
                                  var _options = options,
                                    placement = _options.placement,
                                    boundary = _options.boundary,
                                    rootBoundary = _options.rootBoundary,
                                    padding = _options.padding,
                                    flipVariations = _options.flipVariations,
                                    _options$allowedAutoP = _options.allowedAutoPlacements,
                                    allowedAutoPlacements =
                                      void 0 === _options$allowedAutoP
                                        ? enums.h
                                        : _options$allowedAutoP,
                                    variation = getVariation(placement),
                                    placements = variation
                                      ? flipVariations
                                        ? enums.n
                                        : enums.n.filter(function (placement) {
                                            return getVariation(placement) === variation
                                          })
                                      : enums.b,
                                    allowedPlacements = placements.filter(function (placement) {
                                      return allowedAutoPlacements.indexOf(placement) >= 0
                                    })
                                  0 === allowedPlacements.length && (allowedPlacements = placements)
                                  var overflows = allowedPlacements.reduce(function (
                                    acc,
                                    placement,
                                  ) {
                                    return (
                                      (acc[placement] = detectOverflow(state, {
                                        placement: placement,
                                        boundary: boundary,
                                        rootBoundary: rootBoundary,
                                        padding: padding,
                                      })[getBasePlacement(placement)]),
                                      acc
                                    )
                                  },
                                  {})
                                  return Object.keys(overflows).sort(function (a, b) {
                                    return overflows[a] - overflows[b]
                                  })
                                })(state, {
                                  placement: placement,
                                  boundary: boundary,
                                  rootBoundary: rootBoundary,
                                  padding: padding,
                                  flipVariations: flipVariations,
                                  allowedAutoPlacements: allowedAutoPlacements,
                                })
                              : placement,
                          )
                        }, []),
                      referenceRect = state.rects.reference,
                      popperRect = state.rects.popper,
                      checksMap = new Map(),
                      makeFallbackChecks = !0,
                      firstFittingPlacement = placements[0],
                      i = 0;
                    i < placements.length;
                    i++
                  ) {
                    var placement = placements[i],
                      _basePlacement = getBasePlacement(placement),
                      isStartVariation = getVariation(placement) === enums.l,
                      isVertical = [enums.m, enums.c].indexOf(_basePlacement) >= 0,
                      len = isVertical ? 'width' : 'height',
                      overflow = detectOverflow(state, {
                        placement: placement,
                        boundary: boundary,
                        rootBoundary: rootBoundary,
                        altBoundary: altBoundary,
                        padding: padding,
                      }),
                      mainVariationSide = isVertical
                        ? isStartVariation
                          ? enums.k
                          : enums.f
                        : isStartVariation
                        ? enums.c
                        : enums.m
                    referenceRect[len] > popperRect[len] &&
                      (mainVariationSide = getOppositePlacement(mainVariationSide))
                    var altVariationSide = getOppositePlacement(mainVariationSide),
                      checks = []
                    if (
                      (checkMainAxis && checks.push(overflow[_basePlacement] <= 0),
                      checkAltAxis &&
                        checks.push(
                          overflow[mainVariationSide] <= 0,
                          overflow[altVariationSide] <= 0,
                        ),
                      checks.every(function (check) {
                        return check
                      }))
                    ) {
                      ;(firstFittingPlacement = placement), (makeFallbackChecks = !1)
                      break
                    }
                    checksMap.set(placement, checks)
                  }
                  if (makeFallbackChecks)
                    for (
                      var _loop = function _loop(_i) {
                          var fittingPlacement = placements.find(function (placement) {
                            var checks = checksMap.get(placement)
                            if (checks)
                              return checks.slice(0, _i).every(function (check) {
                                return check
                              })
                          })
                          if (fittingPlacement)
                            return (firstFittingPlacement = fittingPlacement), 'break'
                        },
                        _i = flipVariations ? 3 : 1;
                      _i > 0;
                      _i--
                    ) {
                      if ('break' === _loop(_i)) break
                    }
                  state.placement !== firstFittingPlacement &&
                    ((state.modifiersData[name]._skip = !0),
                    (state.placement = firstFittingPlacement),
                    (state.reset = !0))
                }
              },
              requiresIfExists: ['offset'],
              data: { _skip: !1 },
            },
            {
              name: 'preventOverflow',
              enabled: !0,
              phase: 'main',
              fn: function preventOverflow(_ref) {
                var state = _ref.state,
                  options = _ref.options,
                  name = _ref.name,
                  _options$mainAxis = options.mainAxis,
                  checkMainAxis = void 0 === _options$mainAxis || _options$mainAxis,
                  _options$altAxis = options.altAxis,
                  checkAltAxis = void 0 !== _options$altAxis && _options$altAxis,
                  boundary = options.boundary,
                  rootBoundary = options.rootBoundary,
                  altBoundary = options.altBoundary,
                  padding = options.padding,
                  _options$tether = options.tether,
                  tether = void 0 === _options$tether || _options$tether,
                  _options$tetherOffset = options.tetherOffset,
                  tetherOffset = void 0 === _options$tetherOffset ? 0 : _options$tetherOffset,
                  overflow = detectOverflow(state, {
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    padding: padding,
                    altBoundary: altBoundary,
                  }),
                  basePlacement = getBasePlacement(state.placement),
                  variation = getVariation(state.placement),
                  isBasePlacement = !variation,
                  mainAxis = getMainAxisFromPlacement(basePlacement),
                  altAxis = (function getAltAxis(axis) {
                    return 'x' === axis ? 'y' : 'x'
                  })(mainAxis),
                  popperOffsets = state.modifiersData.popperOffsets,
                  referenceRect = state.rects.reference,
                  popperRect = state.rects.popper,
                  tetherOffsetValue =
                    'function' == typeof tetherOffset
                      ? tetherOffset(Object.assign({}, state.rects, { placement: state.placement }))
                      : tetherOffset,
                  normalizedTetherOffsetValue =
                    'number' == typeof tetherOffsetValue
                      ? { mainAxis: tetherOffsetValue, altAxis: tetherOffsetValue }
                      : Object.assign({ mainAxis: 0, altAxis: 0 }, tetherOffsetValue),
                  offsetModifierState = state.modifiersData.offset
                    ? state.modifiersData.offset[state.placement]
                    : null,
                  data = { x: 0, y: 0 }
                if (popperOffsets) {
                  if (checkMainAxis) {
                    var _offsetModifierState$,
                      mainSide = 'y' === mainAxis ? enums.m : enums.f,
                      altSide = 'y' === mainAxis ? enums.c : enums.k,
                      len = 'y' === mainAxis ? 'height' : 'width',
                      offset = popperOffsets[mainAxis],
                      min = offset + overflow[mainSide],
                      max = offset - overflow[altSide],
                      additive = tether ? -popperRect[len] / 2 : 0,
                      minLen = variation === enums.l ? referenceRect[len] : popperRect[len],
                      maxLen = variation === enums.l ? -popperRect[len] : -referenceRect[len],
                      arrowElement = state.elements.arrow,
                      arrowRect =
                        tether && arrowElement
                          ? getLayoutRect(arrowElement)
                          : { width: 0, height: 0 },
                      arrowPaddingObject = state.modifiersData['arrow#persistent']
                        ? state.modifiersData['arrow#persistent'].padding
                        : { top: 0, right: 0, bottom: 0, left: 0 },
                      arrowPaddingMin = arrowPaddingObject[mainSide],
                      arrowPaddingMax = arrowPaddingObject[altSide],
                      arrowLen = within(0, referenceRect[len], arrowRect[len]),
                      minOffset = isBasePlacement
                        ? referenceRect[len] / 2 -
                          additive -
                          arrowLen -
                          arrowPaddingMin -
                          normalizedTetherOffsetValue.mainAxis
                        : minLen -
                          arrowLen -
                          arrowPaddingMin -
                          normalizedTetherOffsetValue.mainAxis,
                      maxOffset = isBasePlacement
                        ? -referenceRect[len] / 2 +
                          additive +
                          arrowLen +
                          arrowPaddingMax +
                          normalizedTetherOffsetValue.mainAxis
                        : maxLen +
                          arrowLen +
                          arrowPaddingMax +
                          normalizedTetherOffsetValue.mainAxis,
                      arrowOffsetParent =
                        state.elements.arrow && getOffsetParent(state.elements.arrow),
                      clientOffset = arrowOffsetParent
                        ? 'y' === mainAxis
                          ? arrowOffsetParent.clientTop || 0
                          : arrowOffsetParent.clientLeft || 0
                        : 0,
                      offsetModifierValue =
                        null !=
                        (_offsetModifierState$ =
                          null == offsetModifierState ? void 0 : offsetModifierState[mainAxis])
                          ? _offsetModifierState$
                          : 0,
                      tetherMax = offset + maxOffset - offsetModifierValue,
                      preventedOffset = within(
                        tether
                          ? math_min(min, offset + minOffset - offsetModifierValue - clientOffset)
                          : min,
                        offset,
                        tether ? math_max(max, tetherMax) : max,
                      )
                    ;(popperOffsets[mainAxis] = preventedOffset),
                      (data[mainAxis] = preventedOffset - offset)
                  }
                  if (checkAltAxis) {
                    var _offsetModifierState$2,
                      _mainSide = 'x' === mainAxis ? enums.m : enums.f,
                      _altSide = 'x' === mainAxis ? enums.c : enums.k,
                      _offset = popperOffsets[altAxis],
                      _len = 'y' === altAxis ? 'height' : 'width',
                      _min = _offset + overflow[_mainSide],
                      _max = _offset - overflow[_altSide],
                      isOriginSide = -1 !== [enums.m, enums.f].indexOf(basePlacement),
                      _offsetModifierValue =
                        null !=
                        (_offsetModifierState$2 =
                          null == offsetModifierState ? void 0 : offsetModifierState[altAxis])
                          ? _offsetModifierState$2
                          : 0,
                      _tetherMin = isOriginSide
                        ? _min
                        : _offset -
                          referenceRect[_len] -
                          popperRect[_len] -
                          _offsetModifierValue +
                          normalizedTetherOffsetValue.altAxis,
                      _tetherMax = isOriginSide
                        ? _offset +
                          referenceRect[_len] +
                          popperRect[_len] -
                          _offsetModifierValue -
                          normalizedTetherOffsetValue.altAxis
                        : _max,
                      _preventedOffset =
                        tether && isOriginSide
                          ? (function withinMaxClamp(min, value, max) {
                              var v = within(min, value, max)
                              return v > max ? max : v
                            })(_tetherMin, _offset, _tetherMax)
                          : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max)
                    ;(popperOffsets[altAxis] = _preventedOffset),
                      (data[altAxis] = _preventedOffset - _offset)
                  }
                  state.modifiersData[name] = data
                }
              },
              requiresIfExists: ['offset'],
            },
            {
              name: 'arrow',
              enabled: !0,
              phase: 'main',
              fn: function arrow(_ref) {
                var _state$modifiersData$,
                  state = _ref.state,
                  name = _ref.name,
                  options = _ref.options,
                  arrowElement = state.elements.arrow,
                  popperOffsets = state.modifiersData.popperOffsets,
                  basePlacement = getBasePlacement(state.placement),
                  axis = getMainAxisFromPlacement(basePlacement),
                  len = [enums.f, enums.k].indexOf(basePlacement) >= 0 ? 'height' : 'width'
                if (arrowElement && popperOffsets) {
                  var paddingObject = (function toPaddingObject(padding, state) {
                      return mergePaddingObject(
                        'number' !=
                          typeof (padding =
                            'function' == typeof padding
                              ? padding(
                                  Object.assign({}, state.rects, { placement: state.placement }),
                                )
                              : padding)
                          ? padding
                          : expandToHashMap(padding, enums.b),
                      )
                    })(options.padding, state),
                    arrowRect = getLayoutRect(arrowElement),
                    minProp = 'y' === axis ? enums.m : enums.f,
                    maxProp = 'y' === axis ? enums.c : enums.k,
                    endDiff =
                      state.rects.reference[len] +
                      state.rects.reference[axis] -
                      popperOffsets[axis] -
                      state.rects.popper[len],
                    startDiff = popperOffsets[axis] - state.rects.reference[axis],
                    arrowOffsetParent = getOffsetParent(arrowElement),
                    clientSize = arrowOffsetParent
                      ? 'y' === axis
                        ? arrowOffsetParent.clientHeight || 0
                        : arrowOffsetParent.clientWidth || 0
                      : 0,
                    centerToReference = endDiff / 2 - startDiff / 2,
                    min = paddingObject[minProp],
                    max = clientSize - arrowRect[len] - paddingObject[maxProp],
                    center = clientSize / 2 - arrowRect[len] / 2 + centerToReference,
                    offset = within(min, center, max),
                    axisProp = axis
                  state.modifiersData[name] =
                    (((_state$modifiersData$ = {})[axisProp] = offset),
                    (_state$modifiersData$.centerOffset = offset - center),
                    _state$modifiersData$)
                }
              },
              effect: function arrow_effect(_ref2) {
                var state = _ref2.state,
                  _options$element = _ref2.options.element,
                  arrowElement =
                    void 0 === _options$element ? '[data-popper-arrow]' : _options$element
                null != arrowElement &&
                  ('string' != typeof arrowElement ||
                    (arrowElement = state.elements.popper.querySelector(arrowElement))) &&
                  contains(state.elements.popper, arrowElement) &&
                  (state.elements.arrow = arrowElement)
              },
              requires: ['popperOffsets'],
              requiresIfExists: ['preventOverflow'],
            },
            {
              name: 'hide',
              enabled: !0,
              phase: 'main',
              requiresIfExists: ['preventOverflow'],
              fn: function hide(_ref) {
                var state = _ref.state,
                  name = _ref.name,
                  referenceRect = state.rects.reference,
                  popperRect = state.rects.popper,
                  preventedOffsets = state.modifiersData.preventOverflow,
                  referenceOverflow = detectOverflow(state, { elementContext: 'reference' }),
                  popperAltOverflow = detectOverflow(state, { altBoundary: !0 }),
                  referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect),
                  popperEscapeOffsets = getSideOffsets(
                    popperAltOverflow,
                    popperRect,
                    preventedOffsets,
                  ),
                  isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets),
                  hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets)
                ;(state.modifiersData[name] = {
                  referenceClippingOffsets: referenceClippingOffsets,
                  popperEscapeOffsets: popperEscapeOffsets,
                  isReferenceHidden: isReferenceHidden,
                  hasPopperEscaped: hasPopperEscaped,
                }),
                  (state.attributes.popper = Object.assign({}, state.attributes.popper, {
                    'data-popper-reference-hidden': isReferenceHidden,
                    'data-popper-escaped': hasPopperEscaped,
                  }))
              },
            },
          ],
        }),
        react_fast_compare = __webpack_require__('./node_modules/react-fast-compare/index.js'),
        react_fast_compare_default = __webpack_require__.n(react_fast_compare),
        EMPTY_MODIFIERS = [],
        NOOP = function NOOP() {},
        NOOP_PROMISE = function NOOP_PROMISE() {
          return Promise.resolve(null)
        },
        Popper_EMPTY_MODIFIERS = []
      function Popper(_ref) {
        var _ref$placement = _ref.placement,
          placement = void 0 === _ref$placement ? 'bottom' : _ref$placement,
          _ref$strategy = _ref.strategy,
          strategy = void 0 === _ref$strategy ? 'absolute' : _ref$strategy,
          _ref$modifiers = _ref.modifiers,
          modifiers = void 0 === _ref$modifiers ? Popper_EMPTY_MODIFIERS : _ref$modifiers,
          referenceElement = _ref.referenceElement,
          onFirstUpdate = _ref.onFirstUpdate,
          innerRef = _ref.innerRef,
          children = _ref.children,
          referenceNode = react.useContext(ManagerReferenceNodeContext),
          _React$useState = react.useState(null),
          popperElement = _React$useState[0],
          setPopperElement = _React$useState[1],
          _React$useState2 = react.useState(null),
          arrowElement = _React$useState2[0],
          setArrowElement = _React$useState2[1]
        react.useEffect(
          function () {
            setRef(innerRef, popperElement)
          },
          [innerRef, popperElement],
        )
        var options = react.useMemo(
            function () {
              return {
                placement: placement,
                strategy: strategy,
                onFirstUpdate: onFirstUpdate,
                modifiers: [].concat(modifiers, [
                  {
                    name: 'arrow',
                    enabled: null != arrowElement,
                    options: { element: arrowElement },
                  },
                ]),
              }
            },
            [placement, strategy, onFirstUpdate, modifiers, arrowElement],
          ),
          _usePopper = (function usePopper(referenceElement, popperElement, options) {
            void 0 === options && (options = {})
            var prevOptions = react.useRef(null),
              optionsWithDefaults = {
                onFirstUpdate: options.onFirstUpdate,
                placement: options.placement || 'bottom',
                strategy: options.strategy || 'absolute',
                modifiers: options.modifiers || EMPTY_MODIFIERS,
              },
              _React$useState = react.useState({
                styles: {
                  popper: { position: optionsWithDefaults.strategy, left: '0', top: '0' },
                  arrow: { position: 'absolute' },
                },
                attributes: {},
              }),
              state = _React$useState[0],
              setState = _React$useState[1],
              updateStateModifier = react.useMemo(function () {
                return {
                  name: 'updateState',
                  enabled: !0,
                  phase: 'write',
                  fn: function fn(_ref) {
                    var state = _ref.state,
                      elements = Object.keys(state.elements)
                    setState({
                      styles: fromEntries(
                        elements.map(function (element) {
                          return [element, state.styles[element] || {}]
                        }),
                      ),
                      attributes: fromEntries(
                        elements.map(function (element) {
                          return [element, state.attributes[element]]
                        }),
                      ),
                    })
                  },
                  requires: ['computeStyles'],
                }
              }, []),
              popperOptions = react.useMemo(
                function () {
                  var newOptions = {
                    onFirstUpdate: optionsWithDefaults.onFirstUpdate,
                    placement: optionsWithDefaults.placement,
                    strategy: optionsWithDefaults.strategy,
                    modifiers: [].concat(optionsWithDefaults.modifiers, [
                      updateStateModifier,
                      { name: 'applyStyles', enabled: !1 },
                    ]),
                  }
                  return react_fast_compare_default()(prevOptions.current, newOptions)
                    ? prevOptions.current || newOptions
                    : ((prevOptions.current = newOptions), newOptions)
                },
                [
                  optionsWithDefaults.onFirstUpdate,
                  optionsWithDefaults.placement,
                  optionsWithDefaults.strategy,
                  optionsWithDefaults.modifiers,
                  updateStateModifier,
                ],
              ),
              popperInstanceRef = react.useRef()
            return (
              useIsomorphicLayoutEffect(
                function () {
                  popperInstanceRef.current && popperInstanceRef.current.setOptions(popperOptions)
                },
                [popperOptions],
              ),
              useIsomorphicLayoutEffect(
                function () {
                  if (null != referenceElement && null != popperElement) {
                    var popperInstance = (options.createPopper || popper_createPopper)(
                      referenceElement,
                      popperElement,
                      popperOptions,
                    )
                    return (
                      (popperInstanceRef.current = popperInstance),
                      function () {
                        popperInstance.destroy(), (popperInstanceRef.current = null)
                      }
                    )
                  }
                },
                [referenceElement, popperElement, options.createPopper],
              ),
              {
                state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
                styles: state.styles,
                attributes: state.attributes,
                update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
                forceUpdate: popperInstanceRef.current
                  ? popperInstanceRef.current.forceUpdate
                  : null,
              }
            )
          })(referenceElement || referenceNode, popperElement, options),
          state = _usePopper.state,
          styles = _usePopper.styles,
          forceUpdate = _usePopper.forceUpdate,
          update = _usePopper.update,
          childrenProps = react.useMemo(
            function () {
              return {
                ref: setPopperElement,
                style: styles.popper,
                placement: state ? state.placement : placement,
                hasPopperEscaped:
                  state && state.modifiersData.hide
                    ? state.modifiersData.hide.hasPopperEscaped
                    : null,
                isReferenceHidden:
                  state && state.modifiersData.hide
                    ? state.modifiersData.hide.isReferenceHidden
                    : null,
                arrowProps: { style: styles.arrow, ref: setArrowElement },
                forceUpdate: forceUpdate || NOOP,
                update: update || NOOP_PROMISE,
              }
            },
            [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate],
          )
        return unwrapArray(children)(childrenProps)
      }
      var warning = __webpack_require__('./node_modules/warning/warning.js'),
        warning_default = __webpack_require__.n(warning)
      function Reference(_ref) {
        var children = _ref.children,
          innerRef = _ref.innerRef,
          setReferenceNode = react.useContext(ManagerReferenceNodeSetterContext),
          refHandler = react.useCallback(
            function (node) {
              setRef(innerRef, node), safeInvoke(setReferenceNode, node)
            },
            [innerRef, setReferenceNode],
          )
        return (
          react.useEffect(function () {
            return function () {
              return setRef(innerRef, null)
            }
          }),
          react.useEffect(
            function () {
              warning_default()(
                Boolean(setReferenceNode),
                '`Reference` should not be used outside of a `Manager` component.',
              )
            },
            [setReferenceNode],
          ),
          unwrapArray(children)({ ref: refHandler })
        )
      }
      var TooltipContext = react_default.a.createContext({}),
        callAll = function callAll() {
          for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++)
            fns[_key] = arguments[_key]
          return function () {
            for (
              var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
              _key2 < _len2;
              _key2++
            )
              args[_key2] = arguments[_key2]
            return fns.forEach(function (fn) {
              return fn && fn.apply(void 0, args)
            })
          }
        },
        canUseDOM = function canUseDOM() {
          return !(
            'undefined' == typeof window ||
            !window.document ||
            !window.document.createElement
          )
        },
        react_popper_tooltip_setRef = function setRef(ref, node) {
          if ('function' == typeof ref) return ref(node)
          null != ref && (ref.current = node)
        },
        react_popper_tooltip_Tooltip = (function (_Component) {
          function Tooltip() {
            for (
              var _this, _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key]
            return (
              ((_this = _Component.call.apply(_Component, [this].concat(args)) || this).observer =
                void 0),
              (_this.tooltipRef = void 0),
              (_this.handleOutsideClick = function (event) {
                if (_this.tooltipRef && !_this.tooltipRef.contains(event.target)) {
                  var parentOutsideClickHandler = _this.context.parentOutsideClickHandler,
                    _this$props = _this.props,
                    hideTooltip = _this$props.hideTooltip
                  ;(0, _this$props.clearScheduled)(),
                    hideTooltip(),
                    parentOutsideClickHandler && parentOutsideClickHandler(event)
                }
              }),
              (_this.handleOutsideRightClick = function (event) {
                if (_this.tooltipRef && !_this.tooltipRef.contains(event.target)) {
                  var parentOutsideRightClickHandler = _this.context.parentOutsideRightClickHandler,
                    _this$props2 = _this.props,
                    hideTooltip = _this$props2.hideTooltip
                  ;(0, _this$props2.clearScheduled)(),
                    hideTooltip(),
                    parentOutsideRightClickHandler && parentOutsideRightClickHandler(event)
                }
              }),
              (_this.addOutsideClickHandler = function () {
                document.body.addEventListener('touchend', _this.handleOutsideClick),
                  document.body.addEventListener('click', _this.handleOutsideClick)
              }),
              (_this.removeOutsideClickHandler = function () {
                document.body.removeEventListener('touchend', _this.handleOutsideClick),
                  document.body.removeEventListener('click', _this.handleOutsideClick)
              }),
              (_this.addOutsideRightClickHandler = function () {
                return document.body.addEventListener('contextmenu', _this.handleOutsideRightClick)
              }),
              (_this.removeOutsideRightClickHandler = function () {
                return document.body.removeEventListener(
                  'contextmenu',
                  _this.handleOutsideRightClick,
                )
              }),
              (_this.getTooltipRef = function (node) {
                ;(_this.tooltipRef = node), react_popper_tooltip_setRef(_this.props.innerRef, node)
              }),
              (_this.getArrowProps = function (props) {
                return (
                  void 0 === props && (props = {}),
                  Object(esm_extends.a)({}, props, {
                    style: Object(esm_extends.a)({}, props.style, _this.props.arrowProps.style),
                  })
                )
              }),
              (_this.getTooltipProps = function (props) {
                return (
                  void 0 === props && (props = {}),
                  Object(esm_extends.a)(
                    {},
                    props,
                    _this.isTriggeredBy('hover') && {
                      onMouseEnter: callAll(_this.props.clearScheduled, props.onMouseEnter),
                      onMouseLeave: callAll(_this.props.hideTooltip, props.onMouseLeave),
                    },
                    { style: Object(esm_extends.a)({}, props.style, _this.props.style) },
                  )
                )
              }),
              (_this.contextValue = {
                isParentNoneTriggered: 'none' === _this.props.trigger,
                addParentOutsideClickHandler: _this.addOutsideClickHandler,
                addParentOutsideRightClickHandler: _this.addOutsideRightClickHandler,
                parentOutsideClickHandler: _this.handleOutsideClick,
                parentOutsideRightClickHandler: _this.handleOutsideRightClick,
                removeParentOutsideClickHandler: _this.removeOutsideClickHandler,
                removeParentOutsideRightClickHandler: _this.removeOutsideRightClickHandler,
              }),
              _this
            )
          }
          Object(inheritsLoose.a)(Tooltip, _Component)
          var _proto = Tooltip.prototype
          return (
            (_proto.componentDidMount = function componentDidMount() {
              var _this2 = this
              if (
                ((this.observer = new MutationObserver(function () {
                  _this2.props.update()
                })).observe(this.tooltipRef, this.props.mutationObserverOptions),
                this.isTriggeredBy('hover') ||
                  this.isTriggeredBy('click') ||
                  this.isTriggeredBy('right-click'))
              ) {
                var _this$context = this.context,
                  removeParentOutsideClickHandler = _this$context.removeParentOutsideClickHandler,
                  removeParentOutsideRightClickHandler =
                    _this$context.removeParentOutsideRightClickHandler
                this.addOutsideClickHandler(),
                  this.addOutsideRightClickHandler(),
                  removeParentOutsideClickHandler && removeParentOutsideClickHandler(),
                  removeParentOutsideRightClickHandler && removeParentOutsideRightClickHandler()
              }
            }),
            (_proto.componentDidUpdate = function componentDidUpdate() {
              this.props.closeOnReferenceHidden &&
                this.props.isReferenceHidden &&
                this.props.hideTooltip()
            }),
            (_proto.componentWillUnmount = function componentWillUnmount() {
              if (
                (this.observer && this.observer.disconnect(),
                this.isTriggeredBy('hover') ||
                  this.isTriggeredBy('click') ||
                  this.isTriggeredBy('right-click'))
              ) {
                var _this$context2 = this.context,
                  isParentNoneTriggered = _this$context2.isParentNoneTriggered,
                  addParentOutsideClickHandler = _this$context2.addParentOutsideClickHandler,
                  addParentOutsideRightClickHandler =
                    _this$context2.addParentOutsideRightClickHandler
                this.removeOutsideClickHandler(),
                  this.removeOutsideRightClickHandler(),
                  (this.handleOutsideClick = void 0),
                  (this.handleOutsideRightClick = void 0),
                  !isParentNoneTriggered &&
                    addParentOutsideClickHandler &&
                    addParentOutsideClickHandler(),
                  !isParentNoneTriggered &&
                    addParentOutsideRightClickHandler &&
                    addParentOutsideRightClickHandler()
              }
            }),
            (_proto.render = function render() {
              var _this$props3 = this.props,
                arrowProps = _this$props3.arrowProps,
                placement = _this$props3.placement,
                tooltip = _this$props3.tooltip
              return react_default.a.createElement(
                TooltipContext.Provider,
                { value: this.contextValue },
                tooltip({
                  arrowRef: arrowProps.ref,
                  getArrowProps: this.getArrowProps,
                  getTooltipProps: this.getTooltipProps,
                  placement: placement,
                  tooltipRef: this.getTooltipRef,
                }),
              )
            }),
            (_proto.isTriggeredBy = function isTriggeredBy(event) {
              var trigger = this.props.trigger
              return trigger === event || (Array.isArray(trigger) && trigger.includes(event))
            }),
            Tooltip
          )
        })(react.Component)
      react_popper_tooltip_Tooltip.contextType = TooltipContext
      var react_popper_tooltip_TooltipTrigger = (function (_Component) {
        function TooltipTrigger() {
          for (
            var _this, _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key]
          return (
            ((_this = _Component.call.apply(_Component, [this].concat(args)) || this).state = {
              tooltipShown: _this.props.defaultTooltipShown,
            }),
            (_this.hideTimeout = void 0),
            (_this.showTimeout = void 0),
            (_this.popperOffset = void 0),
            (_this.setTooltipState = function (state) {
              var cb = function cb() {
                return _this.props.onVisibilityChange(state.tooltipShown)
              }
              _this.isControlled() ? cb() : _this.setState(state, cb)
            }),
            (_this.clearScheduled = function () {
              clearTimeout(_this.hideTimeout), clearTimeout(_this.showTimeout)
            }),
            (_this.showTooltip = function (_ref) {
              var pageX = _ref.pageX,
                pageY = _ref.pageY
              _this.clearScheduled()
              var state = { tooltipShown: !0 }
              _this.props.followCursor &&
                (state = Object(esm_extends.a)({}, state, { pageX: pageX, pageY: pageY })),
                (_this.showTimeout = window.setTimeout(function () {
                  return _this.setTooltipState(state)
                }, _this.props.delayShow))
            }),
            (_this.hideTooltip = function () {
              _this.clearScheduled(),
                (_this.hideTimeout = window.setTimeout(function () {
                  return _this.setTooltipState({ tooltipShown: !1 })
                }, _this.props.delayHide))
            }),
            (_this.toggleTooltip = function (_ref2) {
              var pageX = _ref2.pageX,
                pageY = _ref2.pageY,
                action = _this.getState() ? 'hideTooltip' : 'showTooltip'
              _this[action]({ pageX: pageX, pageY: pageY })
            }),
            (_this.clickToggle = function (event) {
              event.preventDefault()
              var pageX = event.pageX,
                pageY = event.pageY,
                action = _this.props.followCursor ? 'showTooltip' : 'toggleTooltip'
              _this[action]({ pageX: pageX, pageY: pageY })
            }),
            (_this.contextMenuToggle = function (event) {
              event.preventDefault()
              var pageX = event.pageX,
                pageY = event.pageY,
                action = _this.props.followCursor ? 'showTooltip' : 'toggleTooltip'
              _this[action]({ pageX: pageX, pageY: pageY })
            }),
            (_this.getTriggerProps = function (props) {
              return (
                void 0 === props && (props = {}),
                Object(esm_extends.a)(
                  {},
                  props,
                  _this.isTriggeredBy('click') && {
                    onClick: callAll(_this.clickToggle, props.onClick),
                    onTouchEnd: callAll(_this.clickToggle, props.onTouchEnd),
                  },
                  _this.isTriggeredBy('right-click') && {
                    onContextMenu: callAll(_this.contextMenuToggle, props.onContextMenu),
                  },
                  _this.isTriggeredBy('hover') &&
                    Object(esm_extends.a)(
                      {
                        onMouseEnter: callAll(_this.showTooltip, props.onMouseEnter),
                        onMouseLeave: callAll(_this.hideTooltip, props.onMouseLeave),
                      },
                      _this.props.followCursor && {
                        onMouseMove: callAll(_this.showTooltip, props.onMouseMove),
                      },
                    ),
                  _this.isTriggeredBy('focus') && {
                    onFocus: callAll(_this.showTooltip, props.onFocus),
                    onBlur: callAll(_this.hideTooltip, props.onBlur),
                  },
                )
              )
            }),
            _this
          )
        }
        Object(inheritsLoose.a)(TooltipTrigger, _Component)
        var _proto = TooltipTrigger.prototype
        return (
          (_proto.componentWillUnmount = function componentWillUnmount() {
            this.clearScheduled()
          }),
          (_proto.render = function render() {
            var _this2 = this,
              _this$props = this.props,
              children = _this$props.children,
              tooltip = _this$props.tooltip,
              placement = _this$props.placement,
              trigger = _this$props.trigger,
              getTriggerRef = _this$props.getTriggerRef,
              modifiers = _this$props.modifiers,
              closeOnReferenceHidden = _this$props.closeOnReferenceHidden,
              usePortal = _this$props.usePortal,
              portalContainer = _this$props.portalContainer,
              followCursor = _this$props.followCursor,
              getTooltipRef = _this$props.getTooltipRef,
              mutationObserverOptions = _this$props.mutationObserverOptions,
              restProps = Object(objectWithoutPropertiesLoose.a)(_this$props, [
                'children',
                'tooltip',
                'placement',
                'trigger',
                'getTriggerRef',
                'modifiers',
                'closeOnReferenceHidden',
                'usePortal',
                'portalContainer',
                'followCursor',
                'getTooltipRef',
                'mutationObserverOptions',
              ]),
              popper = react_default.a.createElement(
                Popper,
                Object(esm_extends.a)(
                  {
                    innerRef: getTooltipRef,
                    placement: placement,
                    modifiers: [
                      {
                        name: 'followCursor',
                        enabled: followCursor,
                        phase: 'main',
                        fn: function fn(data) {
                          _this2.popperOffset = data.state.rects.popper
                        },
                      },
                    ].concat(modifiers),
                  },
                  restProps,
                ),
                function (_ref3) {
                  var ref = _ref3.ref,
                    style = _ref3.style,
                    placement = _ref3.placement,
                    arrowProps = _ref3.arrowProps,
                    isReferenceHidden = _ref3.isReferenceHidden,
                    update = _ref3.update
                  if (followCursor && _this2.popperOffset) {
                    var _this2$state = _this2.state,
                      pageX = _this2$state.pageX,
                      pageY = _this2$state.pageY,
                      _this2$popperOffset = _this2.popperOffset,
                      width = _this2$popperOffset.width,
                      height = _this2$popperOffset.height,
                      x =
                        pageX + width > window.pageXOffset + document.body.offsetWidth
                          ? pageX - width
                          : pageX,
                      y =
                        pageY + height > window.pageYOffset + document.body.offsetHeight
                          ? pageY - height
                          : pageY
                    style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0'
                  }
                  return react_default.a.createElement(
                    react_popper_tooltip_Tooltip,
                    Object(esm_extends.a)(
                      {
                        arrowProps: arrowProps,
                        closeOnReferenceHidden: closeOnReferenceHidden,
                        isReferenceHidden: isReferenceHidden,
                        placement: placement,
                        update: update,
                        style: style,
                        tooltip: tooltip,
                        trigger: trigger,
                        mutationObserverOptions: mutationObserverOptions,
                      },
                      {
                        clearScheduled: _this2.clearScheduled,
                        hideTooltip: _this2.hideTooltip,
                        innerRef: ref,
                      },
                    ),
                  )
                },
              )
            return react_default.a.createElement(
              Manager,
              null,
              react_default.a.createElement(
                Reference,
                { innerRef: getTriggerRef },
                function (_ref4) {
                  var ref = _ref4.ref
                  return children({ getTriggerProps: _this2.getTriggerProps, triggerRef: ref })
                },
              ),
              this.getState() &&
                (usePortal ? Object(react_dom.createPortal)(popper, portalContainer) : popper),
            )
          }),
          (_proto.isControlled = function isControlled() {
            return void 0 !== this.props.tooltipShown
          }),
          (_proto.getState = function getState() {
            return this.isControlled() ? this.props.tooltipShown : this.state.tooltipShown
          }),
          (_proto.isTriggeredBy = function isTriggeredBy(event) {
            var trigger = this.props.trigger
            return trigger === event || (Array.isArray(trigger) && trigger.includes(event))
          }),
          TooltipTrigger
        )
      })(react.Component)
      react_popper_tooltip_TooltipTrigger.defaultProps = {
        closeOnReferenceHidden: !0,
        defaultTooltipShown: !1,
        delayHide: 0,
        delayShow: 0,
        followCursor: !1,
        onVisibilityChange: function noop() {},
        placement: 'right',
        portalContainer: canUseDOM() ? document.body : null,
        trigger: 'hover',
        usePortal: canUseDOM(),
        mutationObserverOptions: { childList: !0, subtree: !0 },
        modifiers: [],
      }
      var react_popper_tooltip = react_popper_tooltip_TooltipTrigger,
        memoizerific =
          (__webpack_require__('./node_modules/core-js/modules/es.string.split.js'),
          __webpack_require__('./node_modules/core-js/modules/es.regexp.exec.js'),
          __webpack_require__('./node_modules/core-js/modules/es.string.starts-with.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.concat.js'),
          __webpack_require__('./node_modules/memoizerific/memoizerific.js')),
        memoizerific_default = __webpack_require__.n(memoizerific),
        utils = __webpack_require__('./node_modules/@storybook/theming/dist/esm/utils.js')
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
              }
              return target
            }),
          _extends.apply(this, arguments)
        )
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var _templateObject,
        _templateObject2,
        match = memoizerific_default()(1e3)(function (requests, actual, value) {
          var fallback = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
          return actual.split('-')[0] === requests ? value : fallback
        }),
        Arrow = esm.styled.div(
          { position: 'absolute', borderStyle: 'solid' },
          function (_ref) {
            var placement = _ref.placement,
              x = 0,
              y = 0
            switch (!0) {
              case placement.startsWith('left') || placement.startsWith('right'):
                y = 8
                break
              case placement.startsWith('top') || placement.startsWith('bottom'):
                x = 8
            }
            return { transform: 'translate3d('.concat(x, 'px, ').concat(y, 'px, 0px)') }
          },
          function (_ref2) {
            var theme = _ref2.theme,
              color = _ref2.color,
              placement = _ref2.placement
            return {
              bottom: ''.concat(match('top', placement, -8, 'auto'), 'px'),
              top: ''.concat(match('bottom', placement, -8, 'auto'), 'px'),
              right: ''.concat(match('left', placement, -8, 'auto'), 'px'),
              left: ''.concat(match('right', placement, -8, 'auto'), 'px'),
              borderBottomWidth: ''.concat(match('top', placement, '0', 8), 'px'),
              borderTopWidth: ''.concat(match('bottom', placement, '0', 8), 'px'),
              borderRightWidth: ''.concat(match('left', placement, '0', 8), 'px'),
              borderLeftWidth: ''.concat(match('right', placement, '0', 8), 'px'),
              borderTopColor: match(
                'top',
                placement,
                theme.color[color] || color || 'light' === theme.base
                  ? Object(utils.c)(theme.background.app)
                  : Object(utils.a)(theme.background.app),
                'transparent',
              ),
              borderBottomColor: match(
                'bottom',
                placement,
                theme.color[color] || color || 'light' === theme.base
                  ? Object(utils.c)(theme.background.app)
                  : Object(utils.a)(theme.background.app),
                'transparent',
              ),
              borderLeftColor: match(
                'left',
                placement,
                theme.color[color] || color || 'light' === theme.base
                  ? Object(utils.c)(theme.background.app)
                  : Object(utils.a)(theme.background.app),
                'transparent',
              ),
              borderRightColor: match(
                'right',
                placement,
                theme.color[color] || color || 'light' === theme.base
                  ? Object(utils.c)(theme.background.app)
                  : Object(utils.a)(theme.background.app),
                'transparent',
              ),
            }
          },
        ),
        Wrapper = esm.styled.div(
          function (_ref3) {
            return { display: _ref3.hidden ? 'none' : 'inline-block', zIndex: 2147483647 }
          },
          function (_ref4) {
            var theme = _ref4.theme,
              color = _ref4.color
            return _ref4.hasChrome
              ? {
                  background:
                    theme.color[color] || color || 'light' === theme.base
                      ? Object(utils.c)(theme.background.app)
                      : Object(utils.a)(theme.background.app),
                  filter:
                    '\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ',
                  borderRadius: 2 * theme.appBorderRadius,
                  fontSize: theme.typography.size.s1,
                }
              : {}
          },
        ),
        Tooltip_Tooltip = function Tooltip(_ref5) {
          var placement = _ref5.placement,
            hasChrome = _ref5.hasChrome,
            children = _ref5.children,
            arrowProps = _ref5.arrowProps,
            tooltipRef = _ref5.tooltipRef,
            arrowRef = _ref5.arrowRef,
            color = _ref5.color,
            props = _objectWithoutProperties(_ref5, [
              'placement',
              'hasChrome',
              'children',
              'arrowProps',
              'tooltipRef',
              'arrowRef',
              'color',
            ])
          return react_default.a.createElement(
            Wrapper,
            _extends({ hasChrome: hasChrome, placement: placement, ref: tooltipRef }, props, {
              color: color,
            }),
            hasChrome &&
              react_default.a.createElement(
                Arrow,
                _extends({ placement: placement, ref: arrowRef }, arrowProps, { color: color }),
              ),
            children,
          )
        }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      function WithTooltip_extends() {
        return (
          (WithTooltip_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
              }
              return target
            }),
          WithTooltip_extends.apply(this, arguments)
        )
      }
      function WithTooltip_objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function WithTooltip_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      function _taggedTemplateLiteral(strings, raw) {
        return (
          raw || (raw = strings.slice(0)),
          Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }))
        )
      }
      ;(Tooltip_Tooltip.displayName = 'Tooltip'),
        (Tooltip_Tooltip.defaultProps = {
          color: void 0,
          arrowRef: void 0,
          tooltipRef: void 0,
          hasChrome: !0,
          placement: 'top',
          arrowProps: {},
        })
      var WithTooltip_document = window_default.a.document,
        TargetContainer = esm.styled.div(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteral([
              '\n  display: inline-block;\n  cursor: ',
              ';\n',
            ])),
          function (props) {
            return 'hover' === props.mode ? 'default' : 'pointer'
          },
        ),
        TargetSvgContainer = esm.styled.g(
          _templateObject2 || (_templateObject2 = _taggedTemplateLiteral(['\n  cursor: ', ';\n'])),
          function (props) {
            return 'hover' === props.mode ? 'default' : 'pointer'
          },
        ),
        WithTooltip_WithTooltipPure = function WithTooltipPure(_ref) {
          var svg = _ref.svg,
            trigger = _ref.trigger,
            placement = (_ref.closeOnClick, _ref.placement),
            modifiers = _ref.modifiers,
            hasChrome = _ref.hasChrome,
            _tooltip = _ref.tooltip,
            children = _ref.children,
            tooltipShown = _ref.tooltipShown,
            onVisibilityChange = _ref.onVisibilityChange,
            props = WithTooltip_objectWithoutProperties(_ref, [
              'svg',
              'trigger',
              'closeOnClick',
              'placement',
              'modifiers',
              'hasChrome',
              'tooltip',
              'children',
              'tooltipShown',
              'onVisibilityChange',
            ]),
            Container = svg ? TargetSvgContainer : TargetContainer
          return react_default.a.createElement(
            react_popper_tooltip,
            {
              placement: placement,
              trigger: trigger,
              modifiers: modifiers,
              tooltipShown: tooltipShown,
              onVisibilityChange: onVisibilityChange,
              tooltip: function tooltip(_ref2) {
                var getTooltipProps = _ref2.getTooltipProps,
                  getArrowProps = _ref2.getArrowProps,
                  tooltipRef = _ref2.tooltipRef,
                  arrowRef = _ref2.arrowRef,
                  tooltipPlacement = _ref2.placement
                return react_default.a.createElement(
                  Tooltip_Tooltip,
                  WithTooltip_extends(
                    {
                      hasChrome: hasChrome,
                      placement: tooltipPlacement,
                      tooltipRef: tooltipRef,
                      arrowRef: arrowRef,
                      arrowProps: getArrowProps(),
                    },
                    getTooltipProps(),
                  ),
                  'function' == typeof _tooltip
                    ? _tooltip({
                        onHide: function onHide() {
                          return onVisibilityChange(!1)
                        },
                      })
                    : _tooltip,
                )
              },
            },
            function (_ref3) {
              var getTriggerProps = _ref3.getTriggerProps,
                triggerRef = _ref3.triggerRef
              return react_default.a.createElement(
                Container,
                WithTooltip_extends({ ref: triggerRef }, getTriggerProps(), props),
                children,
              )
            },
          )
        }
      ;(WithTooltip_WithTooltipPure.displayName = 'WithTooltipPure'),
        (WithTooltip_WithTooltipPure.defaultProps = {
          svg: !1,
          trigger: 'hover',
          closeOnClick: !1,
          placement: 'top',
          modifiers: [
            { name: 'preventOverflow', options: { padding: 8 } },
            { name: 'offset', options: { offset: [8, 8] } },
            { name: 'arrow', options: { padding: 8 } },
          ],
          hasChrome: !0,
          tooltipShown: !1,
        })
      var WithTooltip_WithToolTipState = function WithToolTipState(_ref4) {
        var startOpen = _ref4.startOpen,
          onChange = _ref4.onVisibilityChange,
          rest = WithTooltip_objectWithoutProperties(_ref4, ['startOpen', 'onVisibilityChange']),
          _useState2 = _slicedToArray(Object(react.useState)(startOpen || !1), 2),
          tooltipShown = _useState2[0],
          setTooltipShown = _useState2[1],
          onVisibilityChange = Object(react.useCallback)(
            function (visibility) {
              ;(onChange && !1 === onChange(visibility)) || setTooltipShown(visibility)
            },
            [onChange],
          )
        return (
          Object(react.useEffect)(function () {
            var hide = function hide() {
              return onVisibilityChange(!1)
            }
            WithTooltip_document.addEventListener('keydown', hide, !1)
            var iframes = Array.from(WithTooltip_document.getElementsByTagName('iframe')),
              unbinders = []
            return (
              iframes.forEach(function (iframe) {
                var bind = function bind() {
                  try {
                    iframe.contentWindow.document &&
                      (iframe.contentWindow.document.addEventListener('click', hide),
                      unbinders.push(function () {
                        try {
                          iframe.contentWindow.document.removeEventListener('click', hide)
                        } catch (e) {}
                      }))
                  } catch (e) {}
                }
                bind(),
                  iframe.addEventListener('load', bind),
                  unbinders.push(function () {
                    iframe.removeEventListener('load', bind)
                  })
              }),
              function () {
                WithTooltip_document.removeEventListener('keydown', hide),
                  unbinders.forEach(function (unbind) {
                    unbind()
                  })
              }
            )
          }),
          react_default.a.createElement(
            WithTooltip_WithTooltipPure,
            WithTooltip_extends({}, rest, {
              tooltipShown: tooltipShown,
              onVisibilityChange: onVisibilityChange,
            }),
          )
        )
      }
      WithTooltip_WithToolTipState.displayName = 'WithToolTipState'
    },
    './node_modules/react-fast-compare/index.js': function (module, exports) {
      var hasElementType = 'undefined' != typeof Element,
        hasMap = 'function' == typeof Map,
        hasSet = 'function' == typeof Set,
        hasArrayBuffer = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView
      function equal(a, b) {
        if (a === b) return !0
        if (a && b && 'object' == typeof a && 'object' == typeof b) {
          if (a.constructor !== b.constructor) return !1
          var length, i, keys, it
          if (Array.isArray(a)) {
            if ((length = a.length) != b.length) return !1
            for (i = length; 0 != i--; ) if (!equal(a[i], b[i])) return !1
            return !0
          }
          if (hasMap && a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return !1
            for (it = a.entries(); !(i = it.next()).done; ) if (!b.has(i.value[0])) return !1
            for (it = a.entries(); !(i = it.next()).done; )
              if (!equal(i.value[1], b.get(i.value[0]))) return !1
            return !0
          }
          if (hasSet && a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return !1
            for (it = a.entries(); !(i = it.next()).done; ) if (!b.has(i.value[0])) return !1
            return !0
          }
          if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            if ((length = a.length) != b.length) return !1
            for (i = length; 0 != i--; ) if (a[i] !== b[i]) return !1
            return !0
          }
          if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags
          if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf()
          if (a.toString !== Object.prototype.toString) return a.toString() === b.toString()
          if ((length = (keys = Object.keys(a)).length) !== Object.keys(b).length) return !1
          for (i = length; 0 != i--; )
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return !1
          if (hasElementType && a instanceof Element) return !1
          for (i = length; 0 != i--; )
            if (
              (('_owner' !== keys[i] && '__v' !== keys[i] && '__o' !== keys[i]) || !a.$$typeof) &&
              !equal(a[keys[i]], b[keys[i]])
            )
              return !1
          return !0
        }
        return a != a && b != b
      }
      module.exports = function isEqual(a, b) {
        try {
          return equal(a, b)
        } catch (error) {
          if ((error.message || '').match(/stack|recursion/i))
            return console.warn('react-fast-compare cannot handle circular refs'), !1
          throw error
        }
      }
    },
    './node_modules/warning/warning.js': function (module, exports, __webpack_require__) {
      'use strict'
      var warning = function () {}
      module.exports = warning
    },
  },
])
