
      const zones = [
        {
          //"Country": "Tokyo",
          lat: 35.6839,
          lng: 139.7744
        },
        {
          //"Country": "Abu Dhabi",
          lat: 24.4511,
          lng: 54.3969
        },
        {
          //"Country": "Beijing",
          lat: 39.904,
          lng: 116.4075
        },
        {
          //"Country": "Moscow",
          lat: 55.7558,
          lng: 37.6178
        },
        {
          //"Country": "Cape town",
          lat: -33.9249,
          lng: 18.4241
        },
        {
          //"Country": "London",
          lat: 51.5072,
          lng: -0.1275
        },
        {
          //"Country": "australia",
          lat: -33.8688,
          lng: 151.2093
        },
        {
          //"Country": "Singapore",
          lat: 1.3,
          lng: 103.8
        },
        {
          // "Country": "New York",
          lat: 40.6943,
          lng: -73.9249
        },

        {
          //"Country": "Amsterdam",
          lat: 52.3667,
          lng: 4.8833
        },
        {
          //"Country": "Lisbon",
          lat: 34.6037,
          lng: 58.3816
        },
        {
          //"Country": "New Delhi",
          lat: 28.6139,
          lng: 77.209
        },
        {
          //"Country": "Monaco",
          lat: 43.7396,
          lng: 7.4069
        },
        {
          //"Country": "Tokyo",
          lat: 35.6839,
          lng: 139.7744
        },
        {
          //"Country": "Abu Dhabi",
          lat: 24.4511,
          lng: 54.3969
        },
        {
          //"Country": "Beijing",
          lat: 39.904,
          lng: 116.4075
        },
        {
          //"Country": "Moscow",
          lat: 55.7558,
          lng: 37.6178
        },
        {
          //"Country": "Cape town",
          lat: -33.9249,
          lng: 18.4241
        },
        {
          //"Country": "London",
          lat: 51.5072,
          lng: -0.1275
        },
        {
          //"Country": "Abu Dhabi",
          lat: 24.4511,
          lng: 54.3969
        }
      ];
      const map =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAAaADAAQAAAABAAAAAQAAAAD5Ip3+AAAAC0lEQVQIHWP4DwQACfsD/Qy7W+cAAAAASUVORK5CYII=",
        landCheckUrl =
          "https://github.githubassets.com/images/modules/site/home/globe/map.png",
        landCheckImg = new Image(),
        DEG2RAD = Math.PI / 180,
        N = 10,
        world = Globe()
          .globeImageUrl(map)
          .backgroundColor("rgba(0, 0, 0, 0)")
          //.showGlobe(true)
          .showAtmosphere(true)
          .atmosphereColor("white")
          .atmosphereAltitude(0.3)(document.getElementById("globeViz")),
        globeMat = world.globeMaterial();

      globeMat.opacity = 0.75;
      //globeMat.color = new THREE.Color('#eeeeee');
      globeMat.shininess = 0;

      landCheckImg.src = landCheckUrl;
      landCheckImg.crossOrigin = "Anonymous";
      landCheckImg.onload = () => {
        landDots(25, 200, landCheckImg);
      };

      world.pointOfView({
        lat: 28,
        lng: 151.2099,
        altitude: 2
      });
      world.controls().autoRotate = true;
      world.controls().enableZoom = false;
      world.controls().autoRotateSpeed = 1.8;

      let wrapper = document.getElementById("globe-wrapper");
      console.log(wrapper);
      window.addEventListener("resize", (event) => {
        console.log([wrapper.getBoundingClientRect().width]);
        world.width([wrapper.getBoundingClientRect().width]);
        world.height([wrapper.getBoundingClientRect().height]);
      });

      function landDots(globeRad, rows, image) {
        const d = getImageData(image);
        const dots = [];

        for (let lat = -90; lat <= 90; lat += 180 / rows) {
          const radius = Math.cos(Math.abs(lat) * DEG2RAD) * globeRad;
          const circum = radius * Math.PI * 2 * 2;
          for (let r = 0; r < circum; r++) {
            const lng = (360 * r) / circum - 180;
            if (!visibilityForCoordinate(lng, lat, d)) continue;
            dots.push({ lat: lat, lng: lng });
          }
        }
        let randomDash = () => (randomVar = Math.random() * 4000 + 1500);

        world
          .pointsData(dots)
          .pointColor(() => "#63b1fc")
          .pointRadius(0.25)
          .pointResolution(5)
          .pointAltitude(0)
          .pointsMerge(true)
          // arcs
          .arcColor(() => "#000")
          .arcStroke(0.25)
          .arcDashInitialGap(1)
          .arcDashLength(1)
          .arcDashGap(1)
          .arcDashAnimateTime(randomDash)
          .arcsTransitionDuration(0)
          // labels
          .labelText((d) => "")
          .labelColor(() => (t) => `rgba(51,5,141,${1 - t})`)
          .labelDotRadius(0.3)
          .labelAltitude(0.002)
          .labelsTransitionDuration(250)
          // rings
          //.ringColor(() => '#0000ff')
          .ringColor(() => (t) => `rgba(51,5,141,${1 - t})`)
          .ringMaxRadius(5)
          .ringPropagationSpeed(4)
          .ringRepeatPeriod(randomDash);

        (c = [...Array(N).keys()].map((d, i) => ({
          startLat: zones[i].lat,
          startLng: zones[i].lng,
          endLat: zones[i + 1].lat,
          endLng: zones[i + 1].lng
        }))),
          (l = [...Array(N).keys()].map((d, i) => ({
            lat: zones[i].lat,
            lng: zones[i].lng
          })));

        world.arcsData(c).labelsData(l);

        // setInterval(() => {
        r = [...Array(N).keys()].map((d, i) => ({
          lat: zones[i + 1].lat,
          lng: zones[i + 1].lng
        }));
        world.ringsData(r);
      }

      function visibilityForCoordinate(lng, lat, data) {
        const i = 4 * data.width,
          r = parseInt(((lng + 180) / 360) * data.width + 0.5),
          a = data.height - parseInt(((lat + 90) / 180) * data.height - 0.5),
          s = parseInt(i * (a - 1) + 4 * r) + 3;
        return data.data[s] > 90;
      }

      function getImageData(img) {
        const el = document.createElement("canvas").getContext("2d");
        return (
          (el.canvas.width = img.width),
          (el.canvas.height = img.height),
          el.drawImage(img, 0, 0, img.width, img.height),
          el.getImageData(0, 0, img.width, img.height)
        );
      }

