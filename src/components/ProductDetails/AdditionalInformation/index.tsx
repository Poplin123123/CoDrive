import { ReactNode, SyntheticEvent, useEffect, useRef, useState } from "react";
import {
  Box,
  Tab,
  Breakpoint,
  styled,
  Tabs,
  Typography,
  Stack,
  Divider,
  darken,
} from "@mui/material";
import { CoDriverTheme } from "@/theme/light";
// import { Map, Marker } from "pigeon-maps";
// import { osm } from "pigeon-maps/providers";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Lines from "./MapLines";
// import axios from "axios";

function AdditionalInformation() {
  const [hue, setHue] = useState(0);
  const [path, setPath] = useState<any>([]);

  const mapsRef = useRef<any>(null);

  // const resp = async () => {
  //   await axios
  //     .post(
  //       "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
  //       {
  //         coordinates: [
  //           [44.78, 41.82], // Tbilisi
  //           [41.6461, 41.6405], // Batumi
  //           // [41.542597, 45.012556], // Rustavi
  //           // [42.140141, 41.683671], // Poti
  //         ],
  //         preference: "fastest",
  //         units: "mi",
  //         geometry: true,
  //         maximum_speed: 100,
  //       },
  //       {
  //         headers: {
  //           Authorization:
  //             "5b3ce3597851110001cf6248729e1f1bc61a4afa9635e348aba7c0ac",
  //         },
  //       }
  //     )
  //     .then((el) => {
  //       setPath(el.data.features[0].geometry.coordinates);
  //       console.log({
  //         path: el.data.features[0].geometry.coordinates,
  //         distance: Math.ceil(el.data.features[0].properties.summary.distance),
  //         directions: el.data.features[0].properties.segments[0].steps,
  //         duration: el.data.features[0].properties.summary.duration,
  //       });
  //     });
  // };

  // useEffect(() => {
  //   resp();
  // }, []);

  // console.log(mapsRef, "mapsRef 0000");
  // console.log(path, "path 0000");

  return (
    <Box>
      <SectionWrapper>
        <SectionHeader>About the ride:</SectionHeader>
        <Typography sx={{ ml: 1, mt: 1 }}>
          გავალ ოკრიბადან ჩემი მწვანე პრიუსით, გავსისინდები დილის 10 საათზე და
          ბათუმში ჩევერეკები არც მეტი არც ნაკლები 5 საათში ლოდინი არ მიყვარს და
          გაითვლაისიწნეთ. ფულს ვიღებ წინასწარ!!
        </Typography>
      </SectionWrapper>

      <Divider sx={{ m: 2 }} />
      <SectionWrapper>
        <SectionHeader>Map:</SectionHeader>
        <Box sx={{ mx: 1, mt: 1 }}>
          {/* <Map
            provider={osm}
            height={600}
            defaultCenter={[42.3154, 43.3569]}
            defaultZoom={8}
            ref={mapsRef}
          >
            <Marker
              width={50}
              anchor={[41.82, 44.78]}
              color={"green"}
              onClick={() => setHue(hue + 20)}
            />
            <Marker
              width={50}
              anchor={[41.6461, 41.6405]}
              color={"green"}
              onClick={() => setHue(hue + 20)}
            /> */}
          {/* {mapsRef.current && path && (
            <Lines
              coordsArray={
                path.length > 0
                  ? path.map((c: any) => {
                      return [c[1], c[0]];
                    })
                  : []
              }
              mapState={{
                width: "800",
                height: "600",
              }}
              latLngToPixel={mapsRef.current.latLngToPixel}
            />
          )} */}
          {/* </Map> */}
        </Box>
      </SectionWrapper>
    </Box>
  );
}

export { AdditionalInformation };

const SectionHeader = styled(Box)(({ theme }: CoDriverTheme) => ({
  fontSize: "18px",
  fontWeight: 800,
  color: "rgb(34, 51, 84)",
  marginBottom: "2px",
}));

const SectionWrapper = styled(Box)(({ theme }: CoDriverTheme) => ({
  paddingLeft: 16,
  paddingRight: 16,
}));
