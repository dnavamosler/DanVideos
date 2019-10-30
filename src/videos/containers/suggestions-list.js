import React from "react";

import { FlatList, View, ScrollView } from "react-native";
import Layout from "../components/suggestion-list-layout";
import Empty from "../components/empty";
import Separator from "../components/vertical-separator";
import Suggestions from "../components/suggestion";
import { useSelector } from "react-redux";
const SuggestionsList = () => {
  const renderEmpty = () => <Empty text="No hay sugerencias 😥" />;
  const ItemSeparatorComponent = () => <Separator />;
  const renderItem = ({ item }) => <Suggestions {...item} />;
  const keyExtractor = item => item.id.toString();

  const suggestionList = useSelector(state => state.suggestionList);
  return (
    <Layout title="Recomendado para ti">
      <FlatList
        data={suggestionList}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Layout>
  );
};
export default SuggestionsList;
