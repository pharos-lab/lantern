<template>
    <div class="p-4 space-y-8">
        <Button variant="outline" 
            color="primary" 
            rounded="base" 
            @click="openModal = true" 
            icon="PencilSquareIcon" 
            iconPosition="right" 
            size="large"
            shadow
            >
            Open Modal
        </Button>
<!--
        <Alert color="success" variant="outline" icon="InformationCircleIcon" closable="">
            <AlertTitle>Lorem, ipsum.</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</AlertDescription>
            <Actions>
                <Button color="secondary" variant="light">Cancel</Button>
                <Button color="danger" @click="console.log('ok')">Confirm</Button>
            </Actions>
        </Alert>

        <Modal teleport="#app" v-if="openModal" @close="openModal = false" position="bottom-left" size="small" color="danger" variant="light">
            <ModalTitle>Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ea dolores modi vel, nihil pariatur!</ModalTitle>
            <ModalDescription>Lorem ipsum dolor,.</ModalDescription>
            <Actions>
                <Button variant="light">Cancel</Button>
                <Button color="success">Confirm</Button>
            </Actions>
        </Modal>

        <div class="flex gap-4">

            <Card imgPosition="left" img-size="w-1/4" class="grow">
                <CardHeader>title</CardHeader>
                <CardContent>contetn</CardContent>
                <CardFooter>footer</CardFooter>
            </Card>

            <Card imgPosition="right" :img="imgUrl" class="grow">
                <CardHeader>title</CardHeader>
                <CardContent>contetn</CardContent>
                <CardFooter>footer</CardFooter>
            </Card>

        </div> -->

        <Accordion color="danger" variant="light">
            <AccordionItem label="header1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias molestias hic nemo doloribus et consequuntur.
            </AccordionItem>

            <AccordionItem>
                <AccordionItemLabel>header 2</AccordionItemLabel>
                <AccordionItemContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia, et reiciendis laudantium dolorum odit.</AccordionItemContent>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemLabel>header 3</AccordionItemLabel>
                <AccordionItemContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia, et reiciendis laudantium dolorum odit.</AccordionItemContent>
            </AccordionItem>
        </Accordion>

        <Panel color="primary" variant="light">
            <PanelHeader>
                <h3>My Panel Header</h3>
            </PanelHeader>
            <PanelContent>
                <p>This is the content of the panel.</p>
            </PanelContent>
        </Panel>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, neque.</p>

        <Tabs >
            <TabsHeader>
                <Tab name="one">tab 1</Tab>
                <Tab name="two">tab 2</Tab>
                <Tab name="three">tab 3</Tab>
            </TabsHeader>
            <TabsContent>
                <TabItem name="one">
                    tab 1 content
                </TabItem> 
                
                <TabItem name="two">
                   tap 2 content
                </TabItem> 

                <TabItem name="three">
                   tab 3 content
                </TabItem> 
            </TabsContent>
        </Tabs>
        
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Alert from '@/components/Alert.vue';
import AlertTitle from '@/components/AlertTitle.vue';
import AlertDescription from '@/components/AlertDescription.vue';
import Actions from '@/components/Actions.vue';
import Modal from '@/components/Modal.vue'
import ModalTitle from '@/components/ModalTitle.vue'
import ModalDescription from '@/components/ModalDescription.vue'
import Card from './components/Card.vue';
import Accordion from '@/components/Accordion.vue'
import AccordionItem from '@/components/AccordionItem.vue'
import AccordionItemLabel from '@/components/AccordionItemLabel.vue'
import AccordionItemContent from '@/components/AccordionItemContent.vue'
import Panel from '@/components/Panel.vue';
import PanelHeader from '@/components/PanelHeader.vue';
import PanelContent from '@/components/PanelContent.vue';
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';
import TabsHeader from './components/TabsHeader.vue';
import TabsContent from './components/TabsContent.vue';
import TabItem from './components/TabItem.vue';

import imgUrl from '@/assets/vue.svg'

import { ref } from 'vue'

const openModal = ref(false)
</script>



<style scoped>

</style>
