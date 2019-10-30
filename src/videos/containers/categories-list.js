import React from "react";

import { FlatList, View, ScrollView } from "react-native";
import Layout from "../components/categories-list-layout";
import Empty from "../components/empty";
import Separator from "../../sections/components/horizontal-separator";
import Category from "../components/categorie";
const SuggestionsList = ({ list }) => {
  const renderEmpty = () => <Empty text="No hay Categorias 😥" />;
  const ItemSeparatorComponent = () => <Separator />;
  const renderItem = ({ item }) => <Category {...item} />;
  const keyExtractor = item => item.id.toString();

  return (
    <Layout title="Categorias">
      <FlatList
        horizontal
        data={list}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Layout>
  );
};
export default SuggestionsList;
