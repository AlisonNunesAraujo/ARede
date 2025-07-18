import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Keyboard,
    SafeAreaView,
} from 'react-native';

import { s } from './styles';

export default function Login() {
    const [verifiqued, setVerifiqued] = useState(true);

    return (
        <SafeAreaView style={s.container} onTouchStart={Keyboard.dismiss}>
            <View style={s.areaImg}>
                <Image
                    source={require('../../../assets/logo.jpeg')}
                    style={{ width: 150, height: 150, borderRadius: 100 }}
                />
                <Text style={s.title}>A Rede</Text>
            </View>
            {verifiqued ? (
                <View style={s.form}>
                    <Text style={s.label}>E-mail</Text>
                    <TextInput
                        placeholder="E-mail"
                        style={s.inputs}
                        placeholderTextColor={'black'}
                    />
                    <Text style={s.label}>Senha</Text>
                    <TextInput
                        placeholder="Password"
                        style={s.inputs}
                        placeholderTextColor={'black'}
                    />
                    <TouchableOpacity style={s.buttons}>
                        <Text style={s.textButtons}>Entrar na minha conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={s.buttons}
                        onPress={() => setVerifiqued(false)}
                    >
                        <Text style={s.textButtons}>Criar minha conta</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={s.form}>
                    <Text style={s.label}>E-mail</Text>
                    <TextInput
                        placeholder="E-mail"
                        style={s.inputs}
                        placeholderTextColor={'black'}
                    />
                    <Text style={s.label}>Senha</Text>
                    <TextInput
                        placeholder="Password"
                        style={s.inputs}
                        placeholderTextColor={'black'}
                    />
                    <TouchableOpacity style={s.buttons}>
                        <Text style={s.textButtons}>Criar minha conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={s.buttons}
                        onPress={() => setVerifiqued(true)}
                    >
                        <Text style={s.textButtons}>Entrar na minha conta</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
}
