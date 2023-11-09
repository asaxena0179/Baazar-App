import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const cartState = useContext(CartContext);
  const total = cartState.cart.reduce((a, b) => a + b.price, 0);
  const [id, setId] = useState(0);
  const handleDel = () => {
    if (id !== 0) {
      console.log(id);
      cartState.cart = cartState.cart.filter((data) => {
        return data.id !== id;
      });
    }
  };
  useEffect(() => {
    handleDel();
  }, [id]);
  return (
    <View style={{ marginTop: 50, marginHorizontal: 10, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderBottomWidth: 3,
            borderBottomColor: "#0b28e3",
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 30 }}>My Cart</Text>
        </View>
        <ScrollView>
          {cartState.cart.map((data, i) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 10,
                  position: "relative",
                }}
              >
                <View>
                  <Image
                    width={120}
                    height={120}
                    resizeMode={"cover"}
                    source={{
                      uri: data.image,
                    }}
                    alt="Alternate Text"
                    style={{
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                  />
                </View>
                <View style={{ width: "60%" }}>
                  <View>
                    <Text
                      style={{ fontSize: 20, marginVertical: 3 }}
                      numberOfLines={2}
                    >
                      {data.title}
                    </Text>
                    <Text style={{ marginTop: 5 }}>Rating: 4.7 / 5.0</Text>
                    <Text
                      style={{
                        fontSize: 20,
                        marginVertical: 10,
                        fontWeight: "600",
                      }}
                    >
                      ₹{data.price}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    position: "absolute",
                    left: "97%",
                    backgroundColor: "red",
                    alignItems: "center",
                    borderRadius: 50,
                    height: 20,
                    width: 20,
                  }}
                >
                  <Pressable onPress={() => {
                    setId(data.id)
                    
                  }}>
                    <Text style={{ color: "white", top: -1 }}>✖</Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
          height: 52,
        }}
      >
        <View>
          <Text style={{ fontSize: 22, fontWeight: "600" }}>
            Total : ₹ {total}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            borderColor: "#4F200D",
            borderWidth: 1,
            backgroundColor: "#FFD93D",
            width: "40%",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Buy Now</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
