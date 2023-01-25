// 👇️ ts-nocheck disables type checking for the entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 👇️ ts-ignore ignores any ts errors on the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Card, Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import { isHtmlElement } from 'react-router-dom/dist/dom';
import BarChart from '../../Charts/BarChart';
import CardComponent from '../../Card/CardComponent';
import { useLoaderData } from 'react-router-dom';
const PRIMARY_COL_HEIGHT = 300;
const MyMap: any = {};
const mm = new Map();
const AppContent = () => {
  const dataFromLoder = useLoaderData();
  console.log({ dataFromLoder });
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  const [APIData, setAPIData] = useState<any>(null);
  // const eiaGOV =
  //   'https://api.eia.gov/v2/crude-oil-imports/data/?api_key=GZD3mdbCqdHogvV01caMedoegYivnpkd6X4FxGyQ&frequency=monthly&data[0]=quantity&start=2022-01&end=2022-06&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000';
  // const gasPricesAPI =
  //   'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=DEMO_KEY&fuel_type=all,ELEC&state=NY&limit=2';
  // useEffect(() => {
  //   // not in use !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //   fetch('gasPricesAPI', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res: any) => {
  //       console.log(res);
  //       // setAPIData(res);
  //       return res.json();
  //     })
  //     .then((data: any) => {
  //       // let sum = 0;
  //       // if (data.response.data) {
  //       //   console.log('yes');
  //       //   data?.response?.data?.forEach((item: any) => {
  //       //     console.log(item);
  //       //     // item.forEach((item: any) => {
  //       //     //   sum += item.quantity;
  //       //     // });
  //       //   });
  //       // }
  //       // data.response.data.forEach((item: any) => {
  //       //   sum += item.quantity + 5;
  //       // });
  //       console.log(data);
  //       // data.response.data.forEach((element: any) => {
  //       //   if (MyMap[element.originName]) MyMap[element.originName].quantity += element.quantity;
  //       //   else MyMap[element.originName] = element;
  //       // });
  //       // setAPIData(sum);
  //     })
  //     .catch((er: any) => console.log(er));
  // }, []);
  const realWidth = window.screen.width * window.devicePixelRatio;
  const realHeight = window.screen.height * window.devicePixelRatio;
  console.log(`
            Your screen resolution is: ${realWidth} x ${realHeight}
            Your screen devicePixelRatio is: ${window.devicePixelRatio}
            Your screen width is: ${window.screen.width}
            Your screen height is: ${window.screen.height}
            `);
  const ref = useRef(null);
  console.log({ MyMap });

  const client = document.getElementsByClassName('edd')[0];
  const clientHeight = client?.clientHeight;
  const clientWidth = client?.clientWidth;
  const [width, setWidth] = useState(880);
  const [height, setHeight] = useState(500);
  useEffect(() => {
    window.addEventListener('resize', (event) => {
      console.log({ event });
      setWidth(clientWidth);
      setHeight(clientHeight);
    });
  }, [clientHeight, clientWidth]);
  console.log(document.getElementsByClassName('edd'), 'ddd');
  console.log(client?.clientWidth, client?.clientHeight);
  const perentage = width / 1758;
  const newWidth = 880 * perentage;
  return (
    <Container size={2000} px={0}>
      <div ref={ref} className='edd'>
        <SimpleGrid cols={2} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <Grid gutter='md'>
            <div style={{ width: width, heihgt: height }}>
              <BarChart />
            </div>
            <h2>Width: {width}</h2>
            <h2>Percentage: {perentage}</h2>
            <h2>Height: {height}</h2>
            <h2>newWidth: {newWidth}</h2>
          </Grid>
          <Grid gutter='md'>
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius='md' animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius='md' animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <CardComponent />
              {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius='md' animate={false} /> */}
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default AppContent;
