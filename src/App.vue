<template>
    <div class="p-4 space-y-8">

        <Button>ok</Button>

        <Alert color="orange" variant="light" shadow>
            <AlertTitle>Lorem, ipsum.</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</AlertDescription>
        </Alert>

        <Accordion color="red" variant="light" open >
            <AccordionLabel :icon="true">label</AccordionLabel>
            <AccordionContent>content</AccordionContent>
        </Accordion>

        <Badge color="red" variant="light" size="small">36</Badge>
        
        <div class="flex gap-4">

            <Card >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, porro.
            </Card>

            <Card >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, velit?
            </Card>

        </div> 

        <Panel color="red" >
            <PanelLabel>
                Mon Titre
            </PanelLabel>
            <PanelContent>
                Contenu de l'accordéon avec transition fluide
            </PanelContent>
        </Panel>

        <div class="flex justify-center">

            <Dropdown placement="top">
                <DropdownTrigger>
                    <Button>click me Lorem ipsum dolor sit am.</Button>
                </DropdownTrigger>
                <DropdownContent>
                    <Card>Lorem ipsum dolor sit amet consectetur adipisicing</Card>
                </DropdownContent>
            </Dropdown>
        </div>
        <!--
        <Stepper>
            <StepList>
                <StepLabel :index="0">Step 1</StepLabel>
                <StepLabel :index="1">Step 2</StepLabel>
                <StepLabel :index="2">Step 3</StepLabel>
            </StepList>
            <Steps>
                <Step :index="0">Content for Step 1</Step>
                <Step :index="1">Content for Step 2</Step>
                <Step :index="2">Content for Step 3</Step>
            </Steps>
        </Stepper>
        <Modal teleport="#app" v-if="openModal" @close="openModal = false" position="bottom-left" size="small" color="danger" variant="light">
            <ModalTitle>Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ea dolores modi vel, nihil pariatur!</ModalTitle>
            <ModalDescription>Lorem ipsum dolor,.</ModalDescription>
            <Actions>
                <Button variant="light">Cancel</Button>
                <Button color="success">Confirm</Button>
            </Actions>
        </Modal>

        

        

        

        <Tabs active="two">
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

    -->
        
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Alert from '@/components/Alert.vue';
import AlertTitle from '@/components/AlertTitle.vue';
import AlertDescription from '@/components/AlertDescription.vue';
import Badge from '@/components/Badge.vue'
import Dropdown from './components/Dropdown.vue'; 
import DropdownContent from './components/DropdownContent.vue'; 
import DropdownTrigger from './components/DropdownTrigger.vue'; 
// import Modal from '@/components/Modal.vue'
// import ModalTitle from '@/components/ModalTitle.vue'
// import ModalDescription from '@/components/ModalDescription.vue'
import Card from './components/Card.vue';
import Accordion from '@/components/Accordion.vue'
import AccordionLabel from '@/components/AccordionLabel.vue'
import AccordionContent from '@/components/AccordionContent.vue'
import Panel from '@/components/Panel.vue';
import PanelLabel from '@/components/PanelLabel.vue';
import PanelContent from '@/components/PanelContent.vue';
// import Tabs from './components/Tabs.vue';
// import Tab from './components/Tab.vue';
// import TabsHeader from './components/TabsHeader.vue';
// import TabsContent from './components/TabsContent.vue';
// import TabItem from './components/TabItem.vue';
// import Stepper from './components/Stepper.vue'
// import Step from './components/Step.vue'
// import Steps from './components/Steps.vue'
// import StepList from './components/StepList.vue'
// import StepLabel from './components/StepLabel.vue'

import imgUrl from '@/assets/vue.svg'

import { ref } from 'vue'
</script>



<style scoped>
</style>
