this.carouselOptions = {
    effect: 'coverflow', // 
    direction: 'vertical',
    // paginationClickable: true,
    centeredSlides: true, // from the top
    slidesPerView: 'auto',
    observer: true,
    lazyLoading: true,
    coverflow: {
        rotate: 0,
        stretch: 100, // card distance
        depth: 200,
        modifier: 1
        // slideShadows : true
    },
    onTouchMove:function(swiper, event){
        // console.log(swiper, event);
    }
};


// short index
   20      Swiper
  288            Classname
  291            Dom Library and plugins
  309            Breakpoints
  354            Preparation - Define Container, Wrapper and Pagination (velocity?)
  503            Locks, unlocks
  539            Round helper
  545            Set grab cursor
  560            Update on Images Ready
  608            Autoplay
  679            Min/Max Translate
  688            Slider/slides sizes
  922            Dynamic Slides Per View
  954            Slider/slides progress
 1051            Classes
 // 1174            Pagination
 1223            Common update method
 1272            Resize Handler
 1325            Events
 1399            Handle Clicks
 1431            Handle Touches
 2020            Transitions
 2185            Translate/transition helpers
 2315            Observer
 2358            Loop
 2419            Append/Prepend/Remove Slides
 2509            Effects
 2787            Images Lazy Loading
 2914            Scrollbar
 3101            Controller
 3218            Hash Navigation
 3266            History Api with fallback to Hashnav
 3334            Keyboard Control
 3413            Mousewheel Control
 3728            Parallax
 3795            Zoom
 4159            Plugins API. Collect all and init all plugins
 4177            Events/Callbacks/Plugins Emitter
 4330            Init/Destroy
 4493          Prototype
 4505          Browser
 4520          Devices
 4534          Feature Detection
 4576          Plugins
 4583      Dom7 Library
 5249       Get Dom libraries
 5341  Swiper AMD Export


// remove
Effects
Keyboard
mousewheel
Parallax

zoom ?

// custom
core: Pagination, autoplay, (Clicks)
scrollbar: isTouched: false, -> true


// 커스텀 완료 후 click관련 코드 제거하기


// original
/Users/Jyoon/Documents/Snowpalm/src/assets/swiper-custom/swiper-custom.js:
   17      var $;
   18  
   19:     /*===========================
   20      Swiper
   21      ===========================*/
   ..
  288          // Classname
  289          s.classNames = [];
  290:         /*=========================
  291            Dom Library and plugins
  292            ===========================*/
  ...
  306          s.$ = $;
  307          
  308:         /*=========================
  309            Breakpoints
  310            ===========================*/
  ...
  351          }
  352          
  353:         /*=========================
  354            Preparation - Define Container, Wrapper and Pagination
  355            ===========================*/
  ...
  500          s.velocity = 0;
  501          
  502:         /*=========================
  503            Locks, unlocks
  504            ===========================*/
  ...
  536          };
  537          
  538:         /*=========================
  539            Round helper
  540            ===========================*/
  ...
  542              return Math.floor(a);
  543          }
  544:         /*=========================
  545            Set grab cursor
  546            ===========================*/
  ...
  557              s.setGrabCursor();
  558          }
  559:         /*=========================
  560            Update on Images Ready
  561            ===========================*/
  ...
  605          };
  606          
  607:         /*=========================
  608            Autoplay
  609            ===========================*/
  ...
  676              }
  677          };
  678:         /*=========================
  679            Min/Max Translate
  680            ===========================*/
  ...
  685              return (-s.snapGrid[s.snapGrid.length - 1]);
  686          };
  687:         /*=========================
  688            Slider/slides sizes
  689            ===========================*/
  ...
  919          };
  920          
  921:         /*=========================
  922            Dynamic Slides Per View
  923            ===========================*/
  ...
  951              return spv;
  952          };
  953:         /*=========================
  954            Slider/slides progress
  955            ===========================*/
  ...
 1048          };
 1049          
 1050:         /*=========================
 1051            Classes
 1052            ===========================*/
 ....
 1171          };
 1172          
 1173:         /*=========================
 1174            Pagination
 1175            ===========================*/
 ....
 1220              }
 1221          };
 1222:         /*=========================
 1223            Common update method
 1224            ===========================*/
 ....
 1269          };
 1270          
 1271:         /*=========================
 1272            Resize Handler
 1273            ===========================*/
 ....
 1322          };
 1323          
 1324:         /*=========================
 1325            Events
 1326            ===========================*/
 ....
 1396          };
 1397          
 1398:         /*=========================
 1399            Handle Clicks
 1400            ===========================*/
 ....
 1428          };
 1429          
 1430:         /*=========================
 1431            Handle Touches
 1432            ===========================*/
 ....
 2017              }
 2018          };
 2019:         /*=========================
 2020            Transitions
 2021            ===========================*/
 ....
 2182          };
 2183          
 2184:         /*=========================
 2185            Translate/transition helpers
 2186            ===========================*/
 ....
 2312          };
 2313          
 2314:         /*=========================
 2315            Observer
 2316            ===========================*/
 ....
 2355              s.observers = [];
 2356          };
 2357:         /*=========================
 2358            Loop
 2359            ===========================*/
 ....
 2416              }
 2417          };
 2418:         /*=========================
 2419            Append/Prepend/Remove Slides
 2420            ===========================*/
 ....
 2506          
 2507  
 2508:         /*=========================
 2509            Effects
 2510            ===========================*/
 ....
 2784          
 2785  
 2786:         /*=========================
 2787            Images Lazy Loading
 2788            ===========================*/
 ....
 2911          
 2912  
 2913:         /*=========================
 2914            Scrollbar
 2915            ===========================*/
 ....
 3098          
 3099  
 3100:         /*=========================
 3101            Controller
 3102            ===========================*/
 ....
 3215          
 3216  
 3217:         /*=========================
 3218            Hash Navigation
 3219            ===========================*/
 ....
 3263          
 3264  
 3265:         /*=========================
 3266            History Api with fallback to Hashnav
 3267            ===========================*/
 ....
 3331          
 3332  
 3333:         /*=========================
 3334            Keyboard Control
 3335            ===========================*/
 ....
 3410          
 3411  
 3412:         /*=========================
 3413            Mousewheel Control
 3414            ===========================*/
 ....
 3725          
 3726  
 3727:         /*=========================
 3728            Parallax
 3729            ===========================*/
 ....
 3792          
 3793  
 3794:         /*=========================
 3795            Zoom
 3796            ===========================*/
 ....
 4156          
 4157  
 4158:         /*=========================
 4159            Plugins API. Collect all and init all plugins
 4160            ===========================*/
 ....
 4174          
 4175  
 4176:         /*=========================
 4177            Events/Callbacks/Plugins Emitter
 4178            ===========================*/
 ....
 4327          
 4328  
 4329:         /*=========================
 4330            Init/Destroy
 4331            ===========================*/
 ....
 4490      
 4491  
 4492:     /*==================================================
 4493          Prototype
 4494      ====================================================*/
 ....
 4502              return Object.prototype.toString.apply(arr) === '[object Array]';
 4503          },
 4504:         /*==================================================
 4505          Browser
 4506          ====================================================*/
 ....
 4517              })()
 4518          },
 4519:         /*==================================================
 4520          Devices
 4521          ====================================================*/
 ....
 4531              };
 4532          })(),
 4533:         /*==================================================
 4534          Feature Detection
 4535          ====================================================*/
 ....
 4573              })()
 4574          },
 4575:         /*==================================================
 4576          Plugins
 4577          ====================================================*/
 ....
 4580      
 4581  
 4582:     /*===========================
 4583      Dom7 Library
 4584      ===========================*/
 ....
 5246      
 5247  
 5248:     /*===========================
 5249       Get Dom libraries
 5250       ===========================*/
 ....
 5265      
 5266  
 5267:     /*===========================
 5268      Add .swiper plugin from Dom libraries
 5269      ===========================*/
 ....
 5338  })();
 5339  
 5340: /*===========================
 5341  Swiper AMD Export
 5342  ===========================*/

47 matches in 1 file
