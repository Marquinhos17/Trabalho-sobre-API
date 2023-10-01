import React, { useState } from "react";
import { getRandomUser } from "./getRandomUser";
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";

export default function VerRandomUser() {
    const [user, setUser] = useState(null);

    async function carregaUser() {
        try {
            const resultado = await getRandomUser();
            console.log(resultado.name.first)
            setUser(resultado);
        } catch (error) {
            console.log(error);
            setUser(null);
        }
    }

    return (
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'black' }}>

            {user ? (
                <>
                    <View>
                    
                        <Image
                            source={{ uri: user.picture.large }}
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: 'white' }} >Nome: {user.name.first} {user.name.last}</Text>
                        <Text style={{ fontSize: 16, color: 'white' }} >Idade: {user.dob.age}</Text>
                        <Text style={{ fontSize: 16, color: 'white' }} >País: {user.location.country}</Text>
                    </View>
                </>
            ) : (
                <>
                    <View>
                        <ActivityIndicator
                            size='large'
                            color='white'
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: 'white' }} >Nome: Inválido</Text>
                        <Text style={{ fontSize: 16, color: 'white' }} >Idade: Inválido</Text>
                        <Text style={{ fontSize: 16, color: 'white' }} >País: Inválido</Text>
                    </View>
                </>
            )}
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0080ff', padding: 8, borderRadius: 10, margin: 5 }} onPress={carregaUser}>
                <Text style={{ fontSize: 16, fontWeight: '300', color: 'white', fontFamily: 'Arial' }}>Gerar usuario aleatorio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0080ff', padding: 8, borderRadius: 10 }} onPress={() => setUser(null)}>
                <Text style={{ fontSize: 16, fontWeight: '300', color: 'white', fontFamily: 'Arial' }}>Limpar</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 25, color: 'white' }}>Hugo Matheus e José Marcos</Text>
        </View>
    );
}
