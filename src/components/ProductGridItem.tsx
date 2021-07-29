import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { AppColors } from '../utils/Colors'

interface Props {
    item: any
}

const ProductGridItem = (props: Props) => {

    const item = props.item
    const {
        container,
        productImage,
        brand,
        productNamePrice,
        contentContainer
    } = styles

    return (
        <View
            key={item.id}
            style={container}
        >
            <Image style={productImage}
                source={{ uri: item.image }}
                resizeMode='contain'
            />
            <View style={contentContainer}>
                <Text style={brand}>{item.brand.name}</Text>
                <Text numberOfLines={2} style={productNamePrice}>{item.name}</Text>
                <Text style={productNamePrice}>${item.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    contentContainer: {
        marginLeft: 15
    },
    productImage: {
        width: 150,
        height: 150,
        backgroundColor: AppColors.grey,
        borderRadius: 10,
    },
    brand: {
        marginVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8793A1'
    },
    productNamePrice: {
        marginVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default ProductGridItem
