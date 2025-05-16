<template>
    <div class="p-4 space-y-8">

        <Button>ok</Button>

        <SearchList v-model="searchlist" color="red">
            <SearchListInput placeholder="search..."></SearchListInput>
            <SearchListItems class="space-y-2 p-2 border border-slate-200 rounded">
                <EmptyList>No element here</EmptyList>
                <SearchListItem v-for="item in items" :item="item">
                    <SearchListItemLabel>
                        {{ item.label}}
                    </SearchListItemLabel>
                    
                </SearchListItem>
            </SearchListItems>
        </SearchList>
        
        {{ searchlist }}
        <br>

        <SearchList v-model="searchlist2" color="orange">
            <SearchListInput placeholder="search..."></SearchListInput>
            <SearchListItems class="space-y-2">
                <EmptyList>No element here</EmptyList>
                <SearchListItem v-for="item in items" :item="item">
                    <p class="px-5 py-2 rounded">
                        {{ item.label}}
                    </p>
                </SearchListItem>
            </SearchListItems>
        </SearchList>

        <br> 

        <Combobox placement="bottom-start" v-model="combobox" placeholder="click me" color="red">
            <ComboboxItems>
                <ComboboxItem v-for="item in items" :item="item">
                    
                        {{ item.label}}
                    
                </ComboboxItem>
                <EmptyList>no items</EmptyList>
            </ComboboxItems>
        </ComboBox>

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

const searchlist = ref()
const searchlist2 = ref()
const combobox = ref({value:'', label: ''})

const items = [
    { value: 'test', label: 'test label 1' },
    { value: 'test2', label: 'test label 2' },
    { value: 'test3', label: 'test label 3' },
    { value: 'test4', label: 'test label 4' },
]
</script>



<style scoped>
</style>
