import * as React from 'react';
import {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAPI} from '../base/controlers/jda_apis/useAPI';
import {withJDAFormControler} from '../base/controlers/jda_form_controllers/withFormController';
import {
  IJDAGroupScreenItemControllerProps,
  withGroupScreenItemController,
} from '../base/controlers/jda_group_screens_controllers/withGroupScreenItemController';
import {withListController} from '../base/controlers/jda_list_controllers/withListController';
import {
  DefaultListItemAction,
  IJDAListItemControllerProps,
} from '../base/controlers/jda_list_controllers/withListItemController';
import JDAForm, {IJDAFormProps} from '../base/views/jda_form/JDAForm';
import {GroupScreen} from '../base/views/jda_group_screens/GroupScreens';
import {IJDAListProps, JDAList} from '../base/views/jda_list/JDAList';

export interface IBaseModuleProps<T> {
  formConfig: Record<keyof T, React.ReactNode>;
  listItemComponent: React.ComponentType<
    Omit<IJDAListItemControllerProps<T>, 'onItemAction'>
  >;
  api_resource: string;
  keyField: keyof T;
  listTitle?: string;
  formTitle?: string;
}
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
  },
});
export default function BaseModule<T>(props: IBaseModuleProps<T>) {
  const List = withListController<
    T,
    DefaultListItemAction,
    IJDAListProps<T, DefaultListItemAction>
  >(props.api_resource, props.keyField, JDAList);
  const api = useAPI<T>(props.api_resource);
  const Form = withJDAFormControler<T, IJDAFormProps<T>>(JDAForm);
  const FormWraper = () => {
    return (
      <Form onSubmit={v => api.create(v)}>
        {Object.keys(props.formConfig).map(key => (
          <React.Fragment key={key}>
            {props.formConfig[key as keyof typeof props.formConfig]}
          </React.Fragment>
        ))}
      </Form>
    );
  };

  const handleItemAction = useCallback(
    async (item: T, actionType: DefaultListItemAction, _payload: any) => {
      switch (actionType) {
        case DefaultListItemAction.DELETE:
          await api.deleteById(String(item[props.keyField]));
          break;
        case DefaultListItemAction.EDIT:
          break;
        default:
          break;
      }
    },
    [api, props.keyField],
  );

  const ListItem = props.listItemComponent;

  const ListWraper =
    withGroupScreenItemController<IJDAGroupScreenItemControllerProps>(
      (p: IJDAGroupScreenItemControllerProps) => {
        return (
          <SafeAreaView style={styles.container}>
            <List
              onItemAction={handleItemAction}
              renderItem={item => <ListItem item={item} />}
            />
            <FAB
              style={styles.fab}
              icon="plus"
              onPress={() => p.goTo('Form')}
            />
          </SafeAreaView>
        );
      },
    );

  return (
    <GroupScreen
      subScreens={[
        {
          name: 'List',
          title: props.listTitle,
          component: <ListWraper />,
        },
        {
          name: 'Form',
          title: props.formTitle,
          component: <FormWraper />,
        },
      ]}
    />
  );
}
