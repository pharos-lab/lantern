<template>
    <div class="p-4 space-y-8">

        <Button>ok</Button>

        <SearchList v-model="searchlist">
            <SearchListInput placeholder="search..."></SearchListInput>
            <SearchListItems>
                <SearchListItem value="item-1">item 1</SearchListItem>
                <SearchListItem value="item-2">item 2</SearchListItem>
                <SearchListItem value="item-3">item 3</SearchListItem>
            </SearchListItems>
        </SearchList>

        {{ searchlist }}

        <br>

        <Dialog>
            <DialogTrigger>
                <Button>Ouvrir</Button>
            </DialogTrigger>

            <DialogContent>
                <p>Voici le contenu du dialogue</p>
                <DialogClose>
                    <Button>Fermer</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>

        <Alert color="orange" variant="light" shadow>
            <AlertTitle>Lorem, ipsum.</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</AlertDescription>
        </Alert>

        <Accordion color="red" variant="light" shadow :icons="['ChevronDown', 'ChevronUp']" :icon="false">
            <AccordionItem>
                <AccordionItemLabel>label</AccordionItemLabel>
                <AccordionItemContent>content</AccordionItemContent>
            </AccordionItem>

            <AccordionItem open>
                <AccordionItemLabel>label</AccordionItemLabel>
                <AccordionItemContent>content</AccordionItemContent>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemLabel>label</AccordionItemLabel>
                <AccordionItemContent>content</AccordionItemContent>
            </AccordionItem>
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

        <Collapsible color="red" open :icon="false">
            <CollapsibleLabel>
                Mon Titre
            </CollapsibleLabel>
            <CollapsibleContent>
                Contenu de l'accordéon avec transition fluide
            </CollapsibleContent>
        </Collapsible>

        <Collapsible color="red" open>
            <CollapsibleLabel>
                Mon Titre
            </CollapsibleLabel>
            <CollapsibleContent>
                Contenu de l'accordéon avec transition fluide
            </CollapsibleContent>
        </Collapsible>

        <div class="flex justify-center">
            <Dropdown placement="top" :duration="1000">
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
import imgUrl from '@/assets/vue.svg'

import { ref } from 'vue'

const searchlist = ref({
    value: '',
    label: '',
    input: ''
})
</script>



<style scoped>
</style>
