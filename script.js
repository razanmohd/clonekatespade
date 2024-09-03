gsap.from("#band .row",
    { y: 400, duration:1, opacity:0,
       scrollTrigger:{ trigger:"#band .row",
        
           scroller:"body",
           start:"top 90%",
           end:"top 30%",
           
       }
   });


   gsap.from("#band h1",
    { x: -400, duration:1, opacity:0,
       scrollTrigger:{ trigger:"#band",
        
           scroller:"body",
           start:"top 30%",
           end:"top 30%",
           
       }
   });

   gsap.from("#band p",
    { x: 400, duration:1, opacity:0,
       scrollTrigger:{ trigger:"#band",
        
           scroller:"body",
           start:"top 30%",
           end:"top 30%",
           
       }
   });


   gsap.from("#cmng h1",
    { x: -400, duration:1, opacity:0,
       scrollTrigger:{ trigger:"#cmng",
        
           scroller:"body",
           start:"top 90%",
           end:"top 30%",
           
       }
   });

   gsap.from("#cmng p",
    { x: 400, duration:1, opacity:0,
       scrollTrigger:{ trigger:"#cmng",
        
           scroller:"body",
           start:"top 90%",
           end:"top 30%",
           
       }
   });

   gsap.from("#cmng .row",
    { y: -400, duration:1, opacity:0,
       scrollTrigger:{ trigger:"#cmng",
        
           scroller:"body",
           start:"top 90%",
           end:"top 30%",
           
       }
   });



   gsap.from("#dakota h2",
    { y: -400, duration:3, opacity:0,
       scrollTrigger:{ trigger:"#dakota",
           delay:0.5,
           scroller:"body",
           start:"top 90%",
           end:"top 30%",
           
       }
   });

   gsap.from("#dakota p",
    { y: -400, duration:3, opacity:0,
       scrollTrigger:{ trigger:"#dakota",
           delay:0.5,
           scroller:"body",
           start:"top 90%",
           end:"top 30%",
           
       }
   });