(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"scrollBarVisible":"rollOver","backgroundColorDirection":"vertical","class":"Player","scrollBarColor":"#000000","toolTipHorizontalAlign":"center","backgroundColorRatios":[0],"scrollBarWidth":10,"width":"100%","gap":10,"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":1,"paddingTop":0,"paddingLeft":0,"mouseWheelEnabled":true,"propagateClick":false,"id":"rootPlayer","paddingBottom":0,"horizontalAlign":"left","downloadEnabled":false,"overflow":"hidden","paddingRight":0,"verticalAlign":"top","defaultVRPointer":"gaze","definitions": [{"class":"Panorama","hfovMin":"120%","vfov":180,"pitch":0,"id":"panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0","hfovMax":130,"label":trans('panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0.label'),"adjacentPanoramas":[{"distance":1.81,"yaw":-6.94,"select":"this.overlay_7B406980_6819_BE6F_41B5_052503B07B56.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7B406980_6819_BE6F_41B5_052503B07B56"},"class":"AdjacentPanorama","backwardYaw":26.91,"panorama":"this.panorama_7BFE3970_6818_9E90_41C6_20545A37752E"},{"distance":8.02,"yaw":153.54,"select":"this.overlay_7B407980_6819_BE6F_41BC_04F7EBFDD2D1.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7B407980_6819_BE6F_41BC_04F7EBFDD2D1"},"class":"AdjacentPanorama","backwardYaw":-17.41,"panorama":"this.panorama_7B42910A_6819_6E73_41B2_26D6521D143B"}],"hfov":360,"overlays":["this.overlay_7B406980_6819_BE6F_41B5_052503B07B56","this.overlay_7B407980_6819_BE6F_41BC_04F7EBFDD2D1"],"thumbnailUrl":"media/panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0_t.jpg","frames":[{"thumbnailUrl":"media/panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":36864,"rowCount":3,"url":"media/panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":3072,"colCount":36,"tags":"ondemand"},{"width":24576,"rowCount":2,"url":"media/panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"tags":"ondemand"},{"width":12288,"rowCount":1,"url":"media/panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Zone de travail"},"partial":false},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7BFE3970_6818_9E90_41C6_20545A37752E_camera","class":"PanoramaPlayListItem","media":"this.panorama_7BFE3970_6818_9E90_41C6_20545A37752E"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE_camera","class":"PanoramaPlayListItem","media":"this.panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3_camera","class":"PanoramaPlayListItem","media":"this.panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0_camera","class":"PanoramaPlayListItem","media":"this.panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7B42910A_6819_6E73_41B2_26D6521D143B_camera","class":"PanoramaPlayListItem","media":"this.panorama_7B42910A_6819_6E73_41B2_26D6521D143B"}],"class":"PlayList","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"itemThumbnailShadowHorizontalLength":3,"scrollBarVisible":"rollOver","shadow":false,"minHeight":20,"class":"ThumbnailList","itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","toolTipHorizontalAlign":"center","scrollBarWidth":10,"itemMode":"normal","gap":10,"itemBackgroundColorRatios":[],"backgroundOpacity":0,"itemThumbnailWidth":75,"paddingTop":10,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","horizontalAlign":"left","propagateClick":false,"itemThumbnailShadowSpread":1,"paddingBottom":10,"paddingLeft":20,"rollOverItemBackgroundOpacity":0,"itemLabelTextDecoration":"none","itemThumbnailOpacity":1,"paddingRight":20,"selectedItemLabelFontWeight":"bold","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","bottom":"0.02%","itemThumbnailBorderRadius":50,"scrollBarMargin":2,"rollOverItemLabelFontWeight":"normal","verticalAlign":"top","itemThumbnailShadowBlurRadius":8,"itemLabelFontStyle":"normal","itemLabelFontFamily":"Arial","height":135.02,"itemLabelHorizontalAlign":"center","itemThumbnailShadowOpacity":0.54,"itemThumbnailShadowVerticalLength":3,"itemPaddingBottom":3,"itemLabelFontColor":"#FFFFFF","itemThumbnailShadow":true,"itemBackgroundColor":[],"itemHorizontalAlign":"center","itemOpacity":1,"itemBackgroundOpacity":0,"itemPaddingTop":3,"itemThumbnailScaleMode":"fit_outside","itemLabelFontWeight":"normal","layout":"horizontal","itemPaddingRight":3,"selectedItemLabelFontColor":"#FFCC00","itemLabelFontSize":14,"itemThumbnailHeight":75,"scrollBarOpacity":0.5,"itemBorderRadius":0,"itemPaddingLeft":3,"itemLabelPosition":"bottom","borderRadius":5,"borderSize":0,"data":{"name":"ThumbnailList35762"},"itemBackgroundColorDirection":"vertical","minWidth":20,"itemVerticalAlign":"middle","itemLabelGap":9,"left":"0.01%","right":"0.12%"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3_camera"},{"class":"Label","textDecoration":"none","toolTipHorizontalAlign":"center","width":250,"backgroundOpacity":0,"paddingTop":0,"fontFamily":"Arial","horizontalAlign":"center","propagateClick":false,"paddingLeft":0,"paddingBottom":0,"id":"label4056","top":17,"paddingRight":0,"height":50,"verticalAlign":"middle","maxHeight":50,"borderRadius":0,"maxWidth":250,"fontColor":"#FFFFFF","fontSize":30,"fontStyle":"normal","text":trans('label4056.text'),"minHeight":50,"right":"1.45%","minWidth":250,"shadow":false,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_7BFE3970_6818_9E90_41C6_20545A37752E_camera"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7BFE3970_6818_9E90_41C6_20545A37752E_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_7BFE3970_6818_9E90_41C6_20545A37752E"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","media":"this.panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","media":"this.panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7B42910A_6819_6E73_41B2_26D6521D143B_camera","class":"PanoramaPlayListItem","media":"this.panorama_7B42910A_6819_6E73_41B2_26D6521D143B","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_7B42910A_6819_6E73_41B2_26D6521D143B_camera"},{"class":"Panorama","hfovMin":"120%","vfov":180,"pitch":0,"id":"panorama_7B42910A_6819_6E73_41B2_26D6521D143B","hfovMax":130,"label":trans('panorama_7B42910A_6819_6E73_41B2_26D6521D143B.label'),"adjacentPanoramas":[{"distance":9.88,"yaw":-17.41,"select":"this.overlay_7B42A10A_6819_6E73_41D7_6171BEF81CA3.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7B42A10A_6819_6E73_41D7_6171BEF81CA3"},"class":"AdjacentPanorama","backwardYaw":153.54,"panorama":"this.panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0"},{"distance":0.87,"yaw":-10.79,"select":"this.overlay_7B42B10A_6819_6E73_41C7_9E7610AC7B9B.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7B42B10A_6819_6E73_41C7_9E7610AC7B9B"},"class":"AdjacentPanorama","backwardYaw":4.82,"panorama":"this.panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE"}],"hfov":360,"overlays":["this.overlay_7B42A10A_6819_6E73_41D7_6171BEF81CA3","this.overlay_7B42B10A_6819_6E73_41C7_9E7610AC7B9B"],"thumbnailUrl":"media/panorama_7B42910A_6819_6E73_41B2_26D6521D143B_t.jpg","frames":[{"thumbnailUrl":"media/panorama_7B42910A_6819_6E73_41B2_26D6521D143B_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":36864,"rowCount":3,"url":"media/panorama_7B42910A_6819_6E73_41B2_26D6521D143B_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":3072,"colCount":36,"tags":"ondemand"},{"width":24576,"rowCount":2,"url":"media/panorama_7B42910A_6819_6E73_41B2_26D6521D143B_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"tags":"ondemand"},{"width":12288,"rowCount":1,"url":"media/panorama_7B42910A_6819_6E73_41B2_26D6521D143B_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_7B42910A_6819_6E73_41B2_26D6521D143B_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Filet"},"partial":false},{"class":"ViewerArea","vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesShadow":false,"playbackBarProgressOpacity":1,"subtitlesBottom":50,"toolTipFontWeight":"normal","toolTipBorderRadius":3,"data":{"name":"Main Viewer"},"toolTipShadowOpacity":1,"toolTipShadowSpread":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipShadowBlurRadius":3,"playbackBarProgressBackgroundColor":["#222222","#444444"],"paddingRight":0,"progressRight":10,"id":"MainViewer","transitionMode":"blending","playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontSize":12,"playbackBarHeadBorderColor":"#000000","progressOpacity":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#666666","subtitlesTop":0,"subtitlesHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesTextShadowBlurRadius":0,"playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"subtitlesGap":0,"progressBorderColor":"#AAAAAA","subtitlesTextShadowColor":"#000000","displayTooltipInSurfaceSelection":true,"progressBarBackgroundColor":["#222222","#444444"],"subtitlesOpacity":1,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"toolTipBorderColor":"#767676","playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#999999","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderSize":2,"playbackBarHeadBorderSize":0,"progressBarOpacity":1,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","doubleClickAction":"toggle_fullscreen","progressBottom":1,"subtitlesBorderSize":0,"subtitlesPaddingBottom":5,"minHeight":50,"subtitlesPaddingRight":5,"playbackBarBottom":10,"progressHeight":20,"borderSize":0,"playbackBarHeadShadowVerticalLength":0,"progressBorderSize":2,"translationTransitionDuration":1000,"subtitlesTextDecoration":"none","minWidth":100,"progressBarBorderRadius":4,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundOpacity":1,"progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"toolTipHorizontalAlign":"center","toolTipTextShadowOpacity":0,"playbackBarOpacity":1,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"playbackBarHeight":20,"playbackBarRight":0,"surfaceReticleColor":"#FFFFFF","subtitlesPaddingTop":5,"playbackBarBorderColor":"#AAAAAA","paddingTop":0,"playbackBarBorderRadius":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"transitionDuration":500,"paddingBottom":0,"toolTipFontColor":"#606060","toolTipShadowVerticalLength":0,"progressBorderRadius":4,"progressLeft":10,"surfaceReticleOpacity":0.6,"playbackBarBackgroundOpacity":1,"toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","displayTooltipInTouchScreens":true,"surfaceReticleSelectionColor":"#FFFFFF","top":0,"subtitlesFontWeight":"normal","toolTipShadowHorizontalLength":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadHeight":30,"bottom":0,"subtitlesTextShadowVerticalLength":1,"toolTipTextShadowBlurRadius":3,"surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowColor":"#000000","toolTipPaddingLeft":6,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333333","firstTransitionDuration":0,"vrPointerSelectionTime":1500,"playbackBarProgressBorderRadius":0,"subtitlesVerticalAlign":"bottom","playbackBarHeadShadowHorizontalLength":0,"toolTipBorderSize":1,"playbackBarHeadShadow":true,"toolTipPaddingTop":4,"toolTipDisplayTime":600,"toolTipFontStyle":"normal","toolTipOpacity":0.5,"vrPointerSelectionColor":"#FF0000","playbackBarHeadBorderRadius":0,"borderRadius":0,"left":0,"subtitlesPaddingLeft":5,"playbackBarLeft":0,"subtitlesTextShadowHorizontalLength":1,"right":0,"subtitlesEnabled":true,"shadow":false,"playbackBarHeadOpacity":1},{"class":"Image","toolTipHorizontalAlign":"center","width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","backgroundOpacity":0,"paddingTop":0,"horizontalAlign":"left","propagateClick":false,"paddingBottom":0,"paddingLeft":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","top":21.17,"verticalAlign":"top","paddingRight":0,"height":85,"maxHeight":80,"borderRadius":0,"maxWidth":80,"left":26.3,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"shadow":false,"borderSize":0,"scaleMode":"fill"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0_camera"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE_camera"},{"class":"Panorama","hfovMin":"120%","vfov":180,"pitch":0,"id":"panorama_7BFE3970_6818_9E90_41C6_20545A37752E","hfovMax":130,"label":trans('panorama_7BFE3970_6818_9E90_41C6_20545A37752E.label'),"adjacentPanoramas":[{"distance":7.7,"yaw":16.58,"select":"this.overlay_7BFE0971_6818_9E90_41BF_3E3C1DC2564A.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7BFE0971_6818_9E90_41BF_3E3C1DC2564A"},"class":"AdjacentPanorama","backwardYaw":-155.13,"panorama":"this.panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE"},{"distance":86.28,"yaw":-21.18,"select":"this.overlay_7BFE1971_6818_9E90_4199_7A5056AF2B66.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7BFE1971_6818_9E90_4199_7A5056AF2B66"},"class":"AdjacentPanorama","backwardYaw":-9.22,"panorama":"this.panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3"},{"distance":100,"yaw":26.91,"select":"this.overlay_7BFFF971_6818_9E90_41A0_FA19713B4278.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7BFFF971_6818_9E90_41A0_FA19713B4278"},"class":"AdjacentPanorama","backwardYaw":-6.94,"panorama":"this.panorama_7B419980_6819_BE6F_4194_4CD616E9DDA0"}],"hfov":360,"overlays":["this.overlay_7BFE1971_6818_9E90_4199_7A5056AF2B66","this.overlay_7BFE0971_6818_9E90_41BF_3E3C1DC2564A","this.overlay_7BFFF971_6818_9E90_41A0_FA19713B4278"],"thumbnailUrl":"media/panorama_7BFE3970_6818_9E90_41C6_20545A37752E_t.jpg","frames":[{"thumbnailUrl":"media/panorama_7BFE3970_6818_9E90_41C6_20545A37752E_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":36864,"rowCount":3,"url":"media/panorama_7BFE3970_6818_9E90_41C6_20545A37752E_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":3072,"colCount":36,"tags":"ondemand"},{"width":24576,"rowCount":2,"url":"media/panorama_7BFE3970_6818_9E90_41C6_20545A37752E_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"tags":"ondemand"},{"width":12288,"rowCount":1,"url":"media/panorama_7BFE3970_6818_9E90_41C6_20545A37752E_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_7BFE3970_6818_9E90_41C6_20545A37752E_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Hall d'entr\u00e9e"},"partial":false},{"arrowKeysAction":"translate","buttonCardboardView":"this.IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD","viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"gyroscopeEnabled":true,"zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer"},{"class":"IconButton","toolTipHorizontalAlign":"center","width":49,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":false,"paddingLeft":0,"paddingBottom":0,"id":"IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD","iconURL":"skin/IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD.png","top":"6.37%","paddingRight":0,"height":36,"verticalAlign":"middle","maxHeight":50,"maxWidth":50,"borderRadius":0,"transparencyActive":false,"mode":"push","minHeight":50,"right":"4.95%","minWidth":50,"shadow":false,"borderSize":0,"data":{"name":"IconButton11832"}},{"class":"Panorama","hfovMin":"120%","vfov":180,"pitch":0,"id":"panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE","hfovMax":130,"label":trans('panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE.label'),"adjacentPanoramas":[{"distance":13.54,"yaw":-155.13,"select":"this.overlay_7B745775_6819_B291_418B_6CB680F65696.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7B745775_6819_B291_418B_6CB680F65696"},"class":"AdjacentPanorama","backwardYaw":16.58,"panorama":"this.panorama_7BFE3970_6818_9E90_41C6_20545A37752E"},{"distance":9.47,"yaw":-69.04,"select":"this.overlay_7B747775_6819_B291_41AE_44EEF76F965D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7B747775_6819_B291_41AE_44EEF76F965D"},"class":"AdjacentPanorama","backwardYaw":-66.08,"panorama":"this.panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3"},{"distance":100,"yaw":4.82,"select":"this.overlay_7B744775_6819_B291_41C1_20FB8D43A573.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7B744775_6819_B291_41C1_20FB8D43A573"},"class":"AdjacentPanorama","backwardYaw":-10.79,"panorama":"this.panorama_7B42910A_6819_6E73_41B2_26D6521D143B"}],"hfov":360,"overlays":["this.overlay_7B747775_6819_B291_41AE_44EEF76F965D","this.overlay_7B744775_6819_B291_41C1_20FB8D43A573","this.overlay_7B745775_6819_B291_418B_6CB680F65696"],"thumbnailUrl":"media/panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE_t.jpg","frames":[{"thumbnailUrl":"media/panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":36864,"rowCount":3,"url":"media/panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":3072,"colCount":36,"tags":"ondemand"},{"width":24576,"rowCount":2,"url":"media/panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"tags":"ondemand"},{"width":12288,"rowCount":1,"url":"media/panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Espace d\u00e9tente"},"partial":false},{"class":"Panorama","hfovMin":"120%","vfov":180,"pitch":0,"id":"panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3","hfovMax":130,"label":trans('panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3.label'),"adjacentPanoramas":[{"distance":22.52,"yaw":-9.22,"select":"this.overlay_7B5C5B80_6819_F26F_41D7_18ED944D9773.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7B5C5B80_6819_F26F_41D7_18ED944D9773"},"class":"AdjacentPanorama","backwardYaw":-21.18,"panorama":"this.panorama_7BFE3970_6818_9E90_41C6_20545A37752E"},{"distance":5.44,"yaw":-66.08,"select":"this.overlay_7B5C6B80_6819_F26F_41D1_4407487AEF46.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_7B5C6B80_6819_F26F_41D1_4407487AEF46"},"class":"AdjacentPanorama","backwardYaw":-69.04,"panorama":"this.panorama_7B746775_6819_B291_41C2_D4BDA46FBAFE"}],"hfov":360,"overlays":["this.overlay_7B5C5B80_6819_F26F_41D7_18ED944D9773","this.overlay_7B5C6B80_6819_F26F_41D1_4407487AEF46"],"thumbnailUrl":"media/panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3_t.jpg","frames":[{"thumbnailUrl":"media/panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":36864,"rowCount":3,"url":"media/panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":3072,"colCount":36,"tags":"ondemand"},{"width":24576,"rowCount":2,"url":"media/panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"tags":"ondemand"},{"width":12288,"rowCount":1,"url":"media/panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_7B5C4B80_6819_F26F_41D0_534DE5967FE3_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Salle de r\u00e9union"},"partial":false},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_796106C8_6818_93FF_41D4_9B44EDE4B9C1"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":-6.94,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-43.26,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7B406980_6819_BE6F_41B5_052503B07B56"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_7A8C715A_681B_6E93_41D8_529DAA675BAD"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":153.54,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-11.96,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7B407980_6819_BE6F_41BC_04F7EBFDD2D1"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_7A245F55_681B_9291_41D5_2BA39559DC7B"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":-17.41,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-9.76,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7B42A10A_6819_6E73_41D7_6171BEF81CA3"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_7BEDCDA6_6819_F1B3_4191_FEC96B7BE936"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":-10.79,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-63,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7B42B10A_6819_6E73_41C7_9E7610AC7B9B"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_66D40657_6809_B291_41CC_4A53DF101159"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":-21.18,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-1.12,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7BFE1971_6818_9E90_4199_7A5056AF2B66"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_7833772C_6809_B2B7_41D4_D2153996FC8B"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":16.58,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-12.45,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7BFE0971_6818_9E90_41BF_3E3C1DC2564A"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_78E13AAE_6809_73B3_41D4_6E3F1AD7E58F"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":26.91,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":38.41,"scaleMode":"fit_inside"}],"maps":[],"data":{"label":"link"},"id":"overlay_7BFFF971_6818_9E90_41A0_FA19713B4278"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_781B3425_6808_B6B1_41A1_D57BFF58C018"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":-69.04,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-10.16,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7B747775_6819_B291_41AE_44EEF76F965D"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_793D6A8C_680B_9277_41D9_850C7ED13D80"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":4.82,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":25.83,"scaleMode":"fit_inside"}],"maps":[],"data":{"label":"link"},"id":"overlay_7B744775_6819_B291_41C1_20FB8D43A573"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_79A3E059_680B_EE91_41AB_AF7978469E78"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":-155.13,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-7.15,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7B745775_6819_B291_418B_6CB680F65696"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_78C52AE1_6809_73B1_41D9_A8C2D5E54AB7"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":-9.22,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-4.31,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7B5C5B80_6819_F26F_41D7_18ED944D9773"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_7A7F4259_6809_B291_41B3_364F16C5DDDF"],"items":[{"image":"this.res_7C556DCA_6818_91F3_41D6_9555D1593041","distance":50,"yaw":-66.08,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-17.34,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_7B5C6B80_6819_F26F_41D1_4407487AEF46"},{"id":"HotspotPanoramaOverlayArea_796106C8_6818_93FF_41D4_9B44EDE4B9C1","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"height":193,"width":193,"url":"media/res_7C556DCA_6818_91F3_41D6_9555D1593041_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_7C556DCA_6818_91F3_41D6_9555D1593041"},{"id":"HotspotPanoramaOverlayArea_7A8C715A_681B_6E93_41D8_529DAA675BAD","click":"this.mainPlayList.set('selectedIndex', 4)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_7A245F55_681B_9291_41D5_2BA39559DC7B","click":"this.mainPlayList.set('selectedIndex', 3)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_7BEDCDA6_6819_F1B3_4191_FEC96B7BE936","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_66D40657_6809_B291_41CC_4A53DF101159","click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_7833772C_6809_B2B7_41D4_D2153996FC8B","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_78E13AAE_6809_73B3_41D4_6E3F1AD7E58F","click":"this.mainPlayList.set('selectedIndex', 3)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_781B3425_6808_B6B1_41A1_D57BFF58C018","click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_793D6A8C_680B_9277_41D9_850C7ED13D80","click":"this.mainPlayList.set('selectedIndex', 4)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_79A3E059_680B_EE91_41AB_AF7978469E78","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_78C52AE1_6809_73B1_41D9_A8C2D5E54AB7","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_7A7F4259_6809_B291_41B3_364F16C5DDDF","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"scrollBarMargin":2,"backgroundPreloadEnabled":true,"height":"100%","backgroundColor":["#000000"],"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD"],"scripts":{"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"translate":TDV.Tour.Script.translate,"initAnalytics":TDV.Tour.Script.initAnalytics,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getKey":TDV.Tour.Script.getKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"clone":TDV.Tour.Script.clone,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"openLink":TDV.Tour.Script.openLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"init":TDV.Tour.Script.init,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"existsKey":TDV.Tour.Script.existsKey,"quizStart":TDV.Tour.Script.quizStart,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"playAudioList":TDV.Tour.Script.playAudioList,"shareSocial":TDV.Tour.Script.shareSocial,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"registerKey":TDV.Tour.Script.registerKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"resumePlayers":TDV.Tour.Script.resumePlayers,"mixObject":TDV.Tour.Script.mixObject,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizFinish":TDV.Tour.Script.quizFinish,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setLocale":TDV.Tour.Script.setLocale,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cloneCamera":TDV.Tour.Script.cloneCamera,"isPanorama":TDV.Tour.Script.isPanorama,"getPixels":TDV.Tour.Script.getPixels,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initQuiz":TDV.Tour.Script.initQuiz,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setValue":TDV.Tour.Script.setValue,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"downloadFile":TDV.Tour.Script.downloadFile,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"historyGoForward":TDV.Tour.Script.historyGoForward,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues},"layout":"absolute","mobileMipmappingEnabled":false,"creationPolicy":"inAdvance","borderRadius":0,"scrollBarOpacity":0.5,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F175E50B_EB36_5296_41ED_233B1331D0BD], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist])","contentOpaque":false,"minHeight":20,"data":{"initialScale":0.65,"name":"Player28156","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"rate":1}},"minWidth":20,"shadow":false,"desktopMipmappingEnabled":false,"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Sat May 11 2024