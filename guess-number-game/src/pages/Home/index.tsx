import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Image,
    StatusBar, SafeAreaView, TouchableOpacity
} from 'react-native';
import { Routes } from '../../types/routes';

import images from '../../theme/images';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={images.backgroundImages.home}
                style={styles.backgroundImage}
                resizeMode={'cover'}
            >
                <SafeAreaView style={styles.wrapper}>
                    <View style={styles.wrapperActions}>
                        <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate(Routes.Settings)}>
                            <Image source={images.icons.settings} resizeMode={'contain'} style={styles.settingsIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.wrapperPlay}>
                        <Pressable onPress={() => navigation.navigate(Routes.Game)}>
                            <Image source={images.icons.play} style={styles.playIcon} />
                        </Pressable>
                    </View>
                </SafeAreaView>
            </ImageBackground>

            <StatusBar barStyle="light-content" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    backgroundImage: {
        flex: 1,
        paddingVertical: 56
    },
    wrapperActions: {
        flex: .5,
        alignItems: 'flex-end',
    },
    wrapperPlay: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 32,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: '#fff',
    },
    settingsIcon: {
        height: 20,
        width: 20,
    },
    playIcon: {
        width: 126,
        height: 126,
    },
})

export default HomeScreen;
