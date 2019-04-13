var menu_width = $("#menu").outerWidth() + 16,
    hb_width = $("#home_button").width(),
    ttpm_width = $("#typetester_patternmaker_button .icon_text").outerWidth(),
    sp_width = $("#structure_precedents_button .icon_text").outerWidth(),
    dc_width = $("#download_colophon_button .icon_text").outerWidth(),
    header_height = $("#precedents h2").outerHeight();

$(document).ready(function(){
// mouse structure & nav
  var ttpm_on = 0, sp_on = 0, dc_on = 0, menu_on = 0;

  function debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  }
  function close_pmenu(location, time, wait) {
    if (wait === undefined) {
      $(".p_grid_container").animate({
        right: location,
      }, time, function() {
      });
    }
    else {
      $(".p_grid_container").delay(wait).animate({
        right: location,
      }, time, function() {
      });
    }
  }
  function menu_tab() {
    $(".nav").css({
      'top': header_height + 16,
    });
    $("#menu").animate({
      left: -menu_width - 54,
    }, 500, function() {
    });
    $("#placeholder").css({
      'opacity': '1'
    });
    $("#placeholder").delay(750).animate({
      left: 0,
    }, 500, function() {
    });
    if (ttpm_on == 1 && sp_on == 0) {
      $("#icon_home, #icon_sp, #icon_dc").animate({
        opacity: 0.25,
      }, 250, function() {
      });
      $("#icon_ttpm").animate({
        opacity: 1,
      }, 10, function() {
      });
    }
    else if (ttpm_on == 1 && sp_on == 1 && dc_on == 0) {
      $("#icon_home, #icon_ttpm, #icon_dc").animate({
        opacity: 0.25,
      }, 250, function() {
      });
      $("#icon_sp").animate({
        opacity: 1,
      }, 10, function() {
      });
    }
    else if (ttpm_on == 1 && sp_on == 1 && dc_on == 1) {
      $("#icon_home, #icon_ttpm, #icon_sp").animate({
        opacity: 0.25,
      }, 250, function() {
      });
      $("#icon_dc").animate({
        opacity: 1,
      }, 10, function() {
      });
    }
  }
  function end_animations() {
    if ((ttpm_on == 0) || (ttpm_on == 1 && sp_on == 0) || (dc_on == 1)) {
      setTimeout(function(){
        $(".letter.odd, .letter.even, .x1, .x2, .x3").css({
          'animation': 'none'
        });
      }, 750);
    }
    if (ttpm_on == 1) {
      setTimeout(function(){
        $("#home h1").css({
          'animation': 'none'
        });
      }, 750);
    }
  }

  $(window).resize(debounce(function() {
    var nav_width = $(".nav ul").outerWidth(),
        icon_width = $("#home_button .icon").innerWidth(),
        hb_width = $("#home_button .icon_text").outerWidth(),
        ttpm_width = $("#typetester_patternmaker_button .icon_text").outerWidth(),
        sp_width = $("#structure_precedents_button .icon_text").outerWidth(),
        dc_width = $("#download_colophon_button .icon_text").outerWidth(),
        header_height = $("#precedents h2").outerHeight();
  }, 1000, true));

  function hb() {
    ttpm_on = 0;
    sp_on = 0;
    dc_on = 0;
    $("#home h1").css({
      'animation': 'spaceout 8s ease infinite'
    });
    $("#structure_precedents").animate({
      top: '90vh',
    }, 750, function() {
    });
    end_animations();
    $("#structure, #precedents").animate({
      scrollTop: 0,
    }, 750, function() {
    });
    close_pmenu("-45.5vw", 250);
    $("#typetester_patternmaker").animate({
      top: '85vh',
    }, 750, function() {
    });
    $("#download_colophon").animate({
      top: '95vh',
    }, 750, function() {
    });
    $('h2').animate({
      'padding-top': '0.75vh',
    }, 750, function() {
    });
    $("#placeholder").animate({
      left: -54
    }, 250, function() {
    });
    $("#menu").animate({
      left: -menu_width - 54
    }, 250, function() {
    });
    menu_on = 0;
  }
  $("#home_button").click(function(){hb()});

  function ttpm() {
    ttpm_on = 1;
    sp_on = 0;
    dc_on = 0;
    menu_tab();
    $("#typetester_patternmaker_button").animate({
      opacity: '1',
    }, 500, function() {
    });
    $("#structure_precedents_button, #download_colophon_button, #home_button").animate({
      opacity: '0.25',
    }, 500, function() {
    });
    $("#typetester_patternmaker").animate({
      top: '0vh',
    }, 750, function() {
    });
    $('h2').animate({
      'padding-top': '3vh',
    }, 750, function() {
    });
    $("#structure_precedents").animate({
      top: '100vh',
    }, 750, function() {
    });
    end_animations();
    $("#structure, #precedents").animate({
      scrollTop: 0,
    }, 750, function() {
    });
    close_pmenu("-45.5vw", 250);
    $("#download_colophon").animate({
      top: '100vh',
    }, 750, function() {
    });
  }
  $("#typetester_patternmaker, #typetester_patternmaker_button, .color1txt, .color2txt, #home h1").click(function(){ttpm()});

  function sp() {
    ttpm_on = 1;
    sp_on = 1;
    dc_on = 0;
    menu_tab();
    $("#structure_precedents_button").animate({
      opacity: '0.75',
    }, 500, function() {
    });
    $("#typetester_patternmaker_button, #download_colophon_button, #home_button").animate({
      opacity: '0.25',
    }, 500, function() {
    });
    $("#structure_precedents").animate({
      top: '0vh',
    }, 750, function() {
    });
    end_animations();
    $(".letter.odd").css({
      'animation': 'odd_rotate 8s infinite'
    });
    $(".letter.even").css({
      'animation': 'even_rotate 8s infinite'
    });
    $(".x1").css({
      'animation': 'x_1 8s infinite'
    });
    $(".x2").css({
      'animation': 'x_2 8s infinite'
    });
    $(".x3").css({
      'animation': 'x_3 8s infinite'
    });
    close_pmenu('-40vw', 500, 750);
    $('h2').animate({
      'padding-top': '3vh',
    }, 750, function() {
    });
    $("#typetester_patternmaker").animate({
      top: '0vh',
    }, 750, function() {
    });
    $("#download_colophon").animate({
      top: '100vh',
    }, 750, function() {
    });
  }
  $("#structure_precedents, #structure_precedents_button").click(function(){sp()});

  function dc() {
    ttpm_on = 1;
    sp_on = 1;
    dc_on = 1;
    menu_tab();
    $("#download_colophon_button").animate({
      opacity: '0.75',
    }, 500, function() {
    });
    $("#typetester_patternmaker_button, #structure_precedents_button, #home_button").animate({
      opacity: '0.25',
    }, 500, function() {
    });
    $("#download_colophon").animate({
      top: '0vh',
    }, 750, function() {
    });
    $('h2').animate({
      'padding-top': '3vh',
    }, 750, function() {
    });
    $("#structure_precedents").animate({
      top: '0vh',
    }, 750, function() {
    });
    end_animations();
    $("#structure, #precedents").animate({
      scrollTop: 0,
    }, 750, function() {
    });
    $("#typetester_patternmaker").animate({
      top: '0vh',
    }, 750, function() {
    });
  }
  $("#download_colophon, #download_colophon_button").click(function(){dc()});

  $("#typetester_patternmaker").hover(
    function() {
      if (ttpm_on == 0) {
        $("#typetester_patternmaker").animate({
          top: '82.5vh',
        }, 250, function() {
        });
      }
    }, function() {
      if (ttpm_on == 0) {
        $("#typetester_patternmaker").animate({
          top: '85vh',
        }, 250, function() {
        });
      }
  });
  $("#structure_precedents").hover(
    function() {
      if (ttpm_on == 0) {
        $(this).animate({
          top: '87.5vh',
        }, 250, function() {
        });
      }
    }, function() {
      if (ttpm_on == 0) {
        $(this).animate({
          top: '90vh',
        }, 250, function() {
        });
      }
  });
  $("#download_colophon").hover(
    function() {
      if (ttpm_on == 0) {
        $(this).animate({
          top: '92.5vh',
        }, 250, function() {
        });
      }
    }, function() {
      if (ttpm_on == 0) {
        $(this).animate({
          top: '95vh',
        }, 250, function() {
        });
      }
  });

  $("#placeholder").mouseenter(function() {
    $("#menu").animate({
      left: 0,
    }, 400, function() {
    });
    $("#home_button, #typetester_patternmaker_button, #structure_precedents_button, #download_colophon_button").css({
      'opacity': 0.65
    });
    $(this).animate({
      opacity: 0,
    }, 250, function() {
    });
    menu_on = 1;
  });
  $("#menu li").hover(
    function() {
      $(this).animate({
        opacity: 1,
      }, 250, function() {
      });
    }, function() {
      $(this).animate({
        opacity: 0.65,
        }, 250, function() {
      });
  });
  $(".container_fluid, .nav_link").click(function(){
    if (menu_on == 1) {
      $("#placeholder").delay(125).animate({
        opacity: 1
      }, 125, function() {
      });
      $("#menu").animate({
        left: -menu_width - 54
      }, 250, function() {
      });
      menu_on = 0;
    }
    if (ttpm_on == 1 && sp_on == 0) {
      $("#icon_home, #icon_sp, #icon_dc").animate({
        opacity: 0.25,
      }, 250, function() {
      });
      $("#icon_ttpm").animate({
        opacity: 1,
      }, 10, function() {
      });
    }
    else if (ttpm_on == 1 && sp_on == 1 && dc_on == 0) {
      $("#icon_home, #icon_ttpm, #icon_dc").animate({
        opacity: 0.25,
      }, 250, function() {
      });
      $("#icon_sp").animate({
        opacity: 1,
      }, 10, function() {
      });
    }
    else if (ttpm_on == 1 && sp_on == 1 && dc_on == 1) {
      $("#icon_home, #icon_ttpm, #icon_sp").animate({
        opacity: 0.25,
      }, 250, function() {
      });
      $("#icon_dc").animate({
        opacity: 1,
      }, 10, function() {
      });
    }
  });

// scroll nav
/*
  var scrollNav = debounce(function(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      if (ttpm_on == 0) { ttpm(); }
      else if (ttpm_on == 1 && sp_on == 0) { sp(); }
      else if (ttpm_on == 1 && sp_on ==1 && dc_on == 0) { dc(); }
    }
    else {
      if (ttpm_on == 1 && sp_on == 0) { hb(); }
      else if (ttpm_on ==1 && sp_on == 1 && dc_on == 0) { ttpm(); }
      else if (ttpm_on ==1 && sp_on == 1 && dc_on == 1) { sp(); }
    }
    setTimeout(function(){
      lastScrollTop = $(window).scrollTop();
    }, 750)
  }, 75, true);
  window.onscroll = function(){
    scrollNav();
    if (menu_on == 1) { closeMenu(); }
  };*/

// palette changes
  $("#p1").click(function() {
    var html = document.getElementsByTagName('html')[0];
    html.style.cssText = "--color1: var(--purple); --color1_lt: var(--purple_lt); --color1_txt: var(--purple_txt); --color2: var(--orange); --color2_lt: var(--orange_lt); --color2_clr: var(--orange_clr); --color2_txt: var(--orange_txt); --accent: var(--green)";
    $(".alphanum_fill").css({
      'color': 'var(--color2_lt)'
    })
  }); // orange purple
  $("#p2").click(function() {
    var html = document.getElementsByTagName('html')[0];
    html.style.cssText = "--color1: var(--blue); --color1_lt: var(--blue_lt); --color1_txt: var(--blue_txt); --color2: var(--green); --color2_lt: var(--green_lt); --color2_clr: var(--green_clr); --color2_txt: var(--green_txt); --accent: var(--orange)";
    $(".alphanum_fill").css({
      'color': 'var(--color2_lt)'
    })
  }); // blue green
  $("#p3").click(function() {
    var html = document.getElementsByTagName('html')[0];
    html.style.cssText = "--color1: var(--red); --color1_lt: var(--red_lt); --color1_txt: var(--red_txt); --color2: var(--yellow); --color2_lt: var(--yellow_lt); --color2_clr: var(--yellow_clr); --color2_txt: var(--yellow_txt); --accent: var(--purple)"
    $(".alphanum_fill").css({
      'color': 'var(--color2_lt)'
    })
  }); // yellow red
  $("#p4").click(function() {
    var html = document.getElementsByTagName('html')[0];
    html.style.cssText = "--color1: var(--gray); --color1_lt: var(--gray_lt); --color1_txt: var(--gray_txt); --color2: var(--white); --color2_lt: var(--white_lt); --color2_clr: var(--white_clr); --color2_txt: var(--white_txt); --accent: var(--red)"
    $(".alphanum_fill").css({
      'color': 'var(--neutral)'
    })
  }); // neutral gray

// type tester --> pattern maker
  var textlimit = 5;
  var ogGridSize = parseInt(getComputedStyle(document.body,null).getPropertyValue('--grid_size'));
  document.body.style.setProperty('--grid_size', ogGridSize);
  var gridSize = document.body.style.getPropertyValue('--grid_size');
  function updateInput() {
    gridSize = parseInt(document.body.style.getPropertyValue('--grid_size'));
    var maxStrLength = gridSize * gridSize;
    $(".text_preview").attr('maxlength', textlimit);
    $(".text_preview").val($(".text_preview").val().substring(0, textlimit));
    $($(".text_preview").data('copy')).html($(".text_preview").val().repeat(maxStrLength));
    $('#pattern').text($('#pattern').text().substring(0, maxStrLength));
    var text = $('#pattern').text();
    var patternText = text.substring(0, maxStrLength);
    var patternHideText = text.substring(maxStrLength, maxStrLength + gridSize);
    patternText = patternText.replace(/ /g, "\u00A0");
    patternText = patternText.replace(/-/g, "\u2011");
    patternText = patternText.replace(/–/g, "\u2060–\u2060");
    patternText = patternText.replace(/—/g, "\u2060—\u2060");
    $('#pattern').html(patternText);
    var updateText = $('#pattern').text();
    $('#patternmaker h6').text($('#patternmaker h6').text().substring(0, $(".text_preview").val().length));
    var characterCount = String($(".text_preview").val().length);
    current = $('#current');
    current.text(characterCount + '/' + String(textlimit));

  }
  $(".text_preview").on('keyup', function(){updateInput()});
  $("#clear").click(function() {
    $('#input').val('');
    $($(".text_preview").data('copy')).html($("#input").val().repeat(gridSize * gridSize));
    var characterCount = $(".text_preview").val().length,
      current = $('#current');
      current.text(characterCount + '/' + String(textlimit));
  });

// pattern maker
  // grid buttons
  var g2_on = 0, g3_on = 0, g4_on = 0, g5_on = 0, g7_on = 1, g8_on = 0, g10_on = 0, g15_on = 0, g18_on = 0;
  $("#g2, #g3, #g4, #g5, #g7, #g8, #g10, #g15, #g18").hover(
    function() {
      $(this).css({
        'background': 'var(--neutral)'
      });
    }, function() {
    if (g2_on == 1) {
      $(".grid_button").css({
        'background': 'none'
      });
      $("#g2").css({
        'background': 'var(--neutral)'
      });
    }
    else if (g3_on == 1) {
      $(".grid_button").css({
        'background': 'none'
      });
      $("#g3").css({
        'background': 'var(--neutral)'
      });
    }
    else if (g4_on == 1) {
      $(".grid_button").css({
        'background': 'none'
      });
      $("#g4").css({
        'background': 'var(--neutral)'
      });
    }
    else if (g5_on == 1) {
      $(".grid_button").css({
        'background': 'none'
      });
      $("#g5").css({
        'background': 'var(--neutral)'
      });
    }
    else if (g7_on == 1) {
      $(".grid_button").css({
        'background': 'none'
      });
      $("#g7").css({
        'background': 'var(--neutral)'
      });
    }
    else if (g8_on == 1) {
      $(".grid_button").css({
        'background': 'none'
      });
      $("#g8").css({
        'background': 'var(--neutral)'
      });
    }
    else if (g10_on == 1) {
      $(".grid_button").css({
        'background': 'none'
      });
      $("#g10").css({
        'background': 'var(--neutral)'
      });
    }
    else if (g15_on == 1) {
      $(".grid_button").css({
        'background': 'none'
      });
      $("#g15").css({
        'background': 'var(--neutral)'
      });
    }
    else if (g18_on == 1) {
      $(".grid_button").css({
        'background': 'none'
      });
      $("#g18").css({
        'background': 'var(--neutral)'
      });
    }
    else {
      $(this).css({
        'background': 'none'
      });
    }
    });
  $("#g2").click(function() {
    g2_on = 1; g3_on = 0; g4_on = 0; g5_on = 0; g7_on = 0; g8_on = 0; g10_on = 0; g15_on = 0; g18_on = 0;
    document.body.style.setProperty('--grid_size', 2);
    textlimit = 4;
    updateInput();
  });
  $("#g3").click(function() {
    g2_on = 0; g3_on = 1; g4_on = 0; g5_on = 0; g7_on = 0; g8_on = 0; g10_on = 0; g15_on = 0; g18_on = 0;
    document.body.style.setProperty('--grid_size', '3');
    textlimit = 2;
    updateInput();
  });
  $("#g4").click(function() {
    g2_on = 0; g3_on = 0; g4_on = 1; g5_on = 0; g7_on = 0; g8_on = 0; g10_on = 0; g15_on = 0; g18_on = 0;
    document.body.style.setProperty('--grid_size', '4');
    textlimit = 5;
    updateInput();
  });
  $("#g5").click(function() {
    g2_on = 0; g3_on = 0; g4_on = 0; g5_on = 1; g7_on = 0; g8_on = 0; g10_on = 0; g15_on = 0; g18_on = 0;
    document.body.style.setProperty('--grid_size', '5');
    textlimit = 6;
    updateInput();
  });
  $("#g7").click(function() {
    g2_on = 0; g3_on = 0; g4_on = 0; g5_on = 0; g7_on = 1; g8_on = 0; g10_on = 0; g15_on = 0; g18_on = 0;
    document.body.style.setProperty('--grid_size', '7');
    textlimit = 5;
    updateInput();
  });
  $("#g8").click(function() {
    g2_on = 0; g3_on = 0; g4_on = 0; g5_on = 0; g7_on = 0; g8_on = 1; g10_on = 0; g15_on = 0; g18_on = 0;
    document.body.style.setProperty('--grid_size', '8');
    textlimit = 12;
    updateInput();
  });
  $("#g10").click(function() {
    g2_on = 0; g3_on = 0; g4_on = 0; g5_on = 0; g7_on = 0; g8_on = 0; g10_on = 1; g15_on = 0; g18_on = 0;
    document.body.style.setProperty('--grid_size', '10');
    textlimit = 15;
    updateInput();
  });
  $("#g15").click(function() {
    g2_on = 0; g3_on = 0; g4_on = 0; g5_on = 0; g7_on = 0; g8_on = 0; g10_on = 0; g15_on = 1; g18_on = 0;
    document.body.style.setProperty('--grid_size', '15');
    textlimit = 25;
    updateInput();
  });
  $("#g18").click(function() {
    g2_on = 0; g3_on = 0; g4_on = 0; g5_on = 0; g7_on = 0; g8_on = 0; g10_on = 0; g15_on = 0; g18_on = 1;
    document.body.style.setProperty('--grid_size', '18');
    textlimit = 26;
    updateInput();
  });

// print
  document.querySelector("#print").addEventListener("click", function() {
  	window.print();
  });

// precedent modules
  function precedent_scroll(section) {
    var p_st = $('#precedents').scrollTop(),
        precedents_header = $("#precedents h2").outerHeight() + 0.005 * $(window).width();
    $('#precedents').animate({
      scrollTop: $(section).position().top + p_st - precedents_header
    }, 500, function(){
    });
  }
  function link_scroll(link) {
    var s_st = $('#structure').scrollTop(),
        structure_header = $("#structure h2").outerHeight();
    $('#structure').animate({
      scrollTop: $(link).position().top + s_st - structure_header
    }, 500, function(){
    });
  }
  function double_scroll(link, section) {
    link_scroll(link);
    precedent_scroll(section);
  }

  $(".p_").hover(
    function() {
      $(this).find(".alphanum").css({
        'color': 'var(--color1)',
        'transition': 'color 0.5s'
      });
    }, function() {
      $(this).find(".alphanum").css({
      'color': 'var(--color2)',
      'transition': 'color 0.25s'
    });
  });

  var pmenu_mouseenter = debounce(function(){
    close_pmenu('0vw', 750);
  }, 1000, true);
  var pmenu_mouseleave = debounce(function(){
    close_pmenu('-40vw', 750);
  }, 1000, true);
  $(".p_grid_container").on('mouseenter', pmenu_mouseenter);
  $(".p_grid_container").on('mouseleave', pmenu_mouseleave);

  $("#p1_link").click(function() {precedent_scroll("#p1_info")});
  $("#p1_info_b").click(function() {link_scroll("#p1_link")});
  $(".p1").click(function() {double_scroll("#p1_link", "#p1_info")});

  $("#p2_link").click(function() {precedent_scroll("#p2_info")});
  $("#p2_info_b").click(function() {link_scroll("#p2_link")});
  $(".p2").click(function() {double_scroll("#p2_link", "#p2_info")});

  $("#p3_link").click(function() {precedent_scroll("#p3_info")});
  $("#p3_info_b").click(function() {link_scroll("#p3_link")});
  $(".p3").click(function() {double_scroll("#p3_link", "#p3_info")});

  $("#p4_link").click(function() {precedent_scroll("#p4_info")});
  $("#p4_info_b").click(function() {link_scroll("#p4_link")});
  $(".p4").click(function() {double_scroll("#p4_link", "#p4_info")});

  $("#p5_link").click(function() {precedent_scroll("#p5_info")});
  $("#p5_info_b").click(function() {link_scroll("#p5_link")});
  $(".p5").click(function() {double_scroll("#p5_link", "#p5_info")});

  $("#p6_link").click(function() {precedent_scroll("#p6_info")});
  $("#p6_info_b").click(function() {link_scroll("#p6_link")});
  $(".p6").click(function() {double_scroll("#p6_link", "#p6_info")});

  $("#p7_link").click(function() {precedent_scroll("#p7_info")});
  $("#p7_info_b").click(function() {link_scroll("#p7_link")});
  $(".p7").click(function() {double_scroll("#p7_link", "#p7_info")});

  $("#p8_link").click(function() {precedent_scroll("#p8_info")});
  $("#p8_info_b").click(function() {link_scroll("#p8_link")});
  $(".p8").click(function() {double_scroll("#p8_link", "#p8_info")});

  $("#p9_link").click(function() {precedent_scroll("#p9_info")});
  $("#p9_info_b").click(function() {link_scroll("#p9_link")});
  $(".p9").click(function() {double_scroll("#p9_link", "#p9_info")});

});
