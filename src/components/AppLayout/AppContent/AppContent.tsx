import { useEffect, useState } from 'react';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import { isHtmlElement } from 'react-router-dom/dist/dom';
import BarChart from '../../Charts/BarChart';
const PRIMARY_COL_HEIGHT = 300;

const AppContent = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  const [APIData, setAPIData] = useState<any>(null);
  useEffect(() => {
    fetch(
      'https://api.eia.gov/v2/crude-oil-imports/data/?api_key=GZD3mdbCqdHogvV01caMedoegYivnpkd6X4FxGyQ&frequency=monthly&data[0]=quantity&start=2022-01&end=2022-06&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000',
      {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
      .then((res: any) => {
        console.log(res);
        // setAPIData(res);
        return res.json();
      })
      .then((data: any) => {
        let sum = 0;
        // if (data.response.data) {
        //   console.log('yes');
        //   data?.response?.data?.forEach((item: any) => {
        //     console.log(item);
        //     // item.forEach((item: any) => {
        //     //   sum += item.quantity;
        //     // });
        //   });
        // }
        data.response.data.forEach((item: any) => {
          sum += item.quantity + 5;
        });
        console.log(data.response.data);
        setAPIData(sum);
      })
      .catch((er: any) => console.log(er));
  }, []);
  return (
    <Container size={2000} px={0}>
      <SimpleGrid cols={2} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius='md' animate={false}> 
        </Skeleton> */}
        {/* {APIData && <div>{APIData}</div>} */}
    
        {/* <BarChart width={500} height={500} /> */}

        <Grid gutter='md'>
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius='md' animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius='md' animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius='md' animate={false} />
          </Grid.Col>
        </Grid>
        <Grid gutter='md'>
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius='md' animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius='md' animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius='md' animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default AppContent;
