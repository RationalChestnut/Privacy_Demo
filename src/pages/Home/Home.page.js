import React, { useState, useEffect, useContext } from "react";
import {
  DataList,
  HomeContainer,
  CardContainer,
  ItemText,
  UpperNavbar,
  LogoutIcon,
  Title,
} from "./Home.styles";
import axios from "axios";
import { View, ActivityIndicator } from "react-native";
import { AuthenticationContext } from "../../infra/auth/Authentication.context";
export const Home = () => {
  const [dataToRender, setDataToRender] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(10);
  const { onLogout } = useContext(AuthenticationContext);

  const getData = async () => {
    try {
      setIsLoading(true);
      if (page > maxPage) return;
      const res = await axios.get(
        "https://lithic-api-proxy--timmy_i_chen.repl.co/v1/transactions",
        {
          params: {
            page: page,
            page_size: 20,
          },
          headers: {
            Authorization: "834763e1-4d25-4248-a81c-9036e14313bf",
          },
        }
      );
      if (!dataToRender) {
        setDataToRender(res.data.data);
      } else {
        setDataToRender(dataToRender.concat(res.data.data));
      }
      setMaxPage(res.data.total_pages);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    getData();
  };

  const renderFooter = () => {
    if (!isLoading) return null;

    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  const convertDateToReadable = (dateStr) => {
    // Parse the date string into a Date object
    const dateObj = new Date(dateStr);

    // Format the Date object into a readable date string
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };

    return dateObj.toLocaleString("en-US", options);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    if (!item) {
      return <ItemText>0</ItemText>;
    }
    return (
      <CardContainer>
        <ItemText>Created: {convertDateToReadable(item.created)}</ItemText>
        <ItemText>Status: {item.status}</ItemText>
        <ItemText>Amount: ${item.amount / 100}</ItemText>
        <ItemText>Acceptor ID: {item.merchant.acceptor_id}</ItemText>
        <ItemText>Country: {item.merchant.country}</ItemText>
        <ItemText>City: {item.merchant.city}</ItemText>
        <ItemText>Descriptor: {item.merchant.descriptor}</ItemText>
        <ItemText>MCC: {item.merchant.mcc}</ItemText>
        <ItemText>State: {item.merchant.state}</ItemText>
      </CardContainer>
    );
  };

  return (
    <HomeContainer>
      <UpperNavbar>
        <Title>Privacy Demo</Title>
        <LogoutIcon onPress={onLogout} />
      </UpperNavbar>
      <DataList
        data={dataToRender}
        extraData={dataToRender}
        renderItem={renderItem}
        onEndReached={!isLoading && handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        keyExtractor={(item, index) => {
          return item.card_token + index;
        }}
      />
    </HomeContainer>
  );
};
