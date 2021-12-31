import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../assets/styles/colors';
import styles from './styles';

const AboutAuthor = () => {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.containerIcon}
                        onPress={() => {
                            navigation.navigate('Home')
                        }} >
                        <Icon name='arrowleft' size={30} color={colors.gold_text} />
                    </TouchableOpacity>

                    <View style={styles.containerText}>
                        <Text
                            style={styles.textHeader}>
                            Sobre o Autor</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <Image
                        style={styles.tinyAuthor}
                        source={require('../../assets/author.jpg')}
                    />

                    <View>
                        <Text style={styles.author}>Sérgio Sacani</Text>
                        <Text style={styles.formacao}>Geofísico pelo IAG da USP</Text>
                        <Text style={styles.description}>
                            Esse aplicativo é uma homenagem ao Sérgio Sacani, formado em geofísica pelo IAG da USP, mestre em engenharia do petróleo pela UNICAMP e doutor em geociências pela UNICAMP.
                            Sérgio está à frente do Space Today, o maior canal de notícias sobre astronomia do Brasil; e também está à frente do canal Ciência Sem Fim.
                        </Text>
                        <Text style={styles.description}>Ao acessar o conteúdo deste app, você estará acessando diretamente o conteúdo do Sérgio Sacani, gerando views para o mesmo. O app não possui fins lucrativos para o desenvolvedor.</Text>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default AboutAuthor;
