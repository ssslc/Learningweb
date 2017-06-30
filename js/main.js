        window.onload = function () {
            var banner_slide = document.getElementById('banner_slide');
            var banner_content = document.getElementById('banner_content');
            var banner_dot = document.getElementById('banner_dot').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 5;
            var animated = false;
            var interval = 3000;
            var timer;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(banner_content.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(banner_content.style.left) < left) || (speed < 0 && parseInt(banner_content.style.left) > left)) {
                        banner_content.style.left = parseInt(banner_content.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        banner_content.style.left = left + 'px';
                        if(left>-200){
                            banner_content.style.left = -900 * len + 'px';
                        }
                        if(left<(-900 * len)) {
                            banner_content.style.left = '-900px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < banner_dot.length ; i++) {
                    if( banner_dot[i].className == 'on'){
                        banner_dot[i].className = '';
                        break;
                    }
                }
                banner_dot[index - 1].className = 'on';
            }

            function play() {        //自动跳转
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {  //点击右键，跳转
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-900);
                showButton();
            }
            prev.onclick = function () {   //点击右键，跳转
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(900);
                showButton();
            }

            for (var i = 0; i < banner_dot.length; i++) {  //点击小圆点，跳转
                banner_dot[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -900 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            banner_slide.onmouseover = stop;
            banner_slide.onmouseout = play;

            play();

        }
  