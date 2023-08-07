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
import { getLithicData } from "../../../api/lithic.api";
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
      const res = await getLithicData(page);
      if (!dataToRender) {
        setDataToRender(res.data);
      } else {
        setDataToRender(dataToRender.concat(res.data));
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
    console.log("Getting data");
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
    return (
      <CardContainer testID={`item_${item.card_token}`}>
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
        testID="flatlist"
      />
    </HomeContainer>
  );
};
