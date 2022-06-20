import { Divider, Icon, List, ListItem } from '@ui-kitten/components';
import * as React from 'react';
import { DrawerLayoutAndroid, StyleSheet, View } from 'react-native';
import { IRouterControllerAPI, withRouterController } from '../../controllers/jda_router/withJDARouter';

export interface IJDARouterProps extends IRouterControllerAPI {
}

function JDARouter(props: IJDARouterProps) {

    const drawer = React.useRef<DrawerLayoutAndroid>()
    const navigationView = () => (
        <View style={styles.container}>
            {/* <List data={props.routes}
                ItemSeparatorComponent={p => <Divider {...p} />}
                renderItem={(item) => <ListItem title={item.item.title ?? item.item.name}
                    accessoryLeft={<Icon name={'star'} />} />} /> */}
        </View>
    );
    return (
        <DrawerLayoutAndroid ref={drawer as any} drawerPosition='left' renderNavigationView={navigationView}>
            <List data={props.routes}
                ItemSeparatorComponent={p => <Divider {...p} />}
                renderItem={(item) => <ListItem title={item.item.title ?? item.item.name} onPress={() => props.JDARouter.goToModule(item.item.name)}
                    accessoryLeft={<Icon name={'star'} />} />} />
        </DrawerLayoutAndroid>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    }
});

export default withRouterController(JDARouter)