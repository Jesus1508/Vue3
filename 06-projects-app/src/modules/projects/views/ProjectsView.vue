<template>
    <div class="overflow-x-auto w-full">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th></th>
                    <th>Poyecto</th>
                    <th>Tareas</th>
                    <th>Avance</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(project, index) in projectsStore.projectList" :key="project.id" class="hover">
                    <th>{{ index + 1 }}</th>
                    <td>{{ project.name }}</td>
                    <td>{{ project.tasks.length }}</td>
                    <td>
                        <progress class="progress progress-primary w-56" value="10" max="100" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <InputModal 
        :open="modalOpen" 
        @close="modalOpen = false"
        @value="projectsStore.addProject" 
        placeholder="Ingrese el nombre del proyecto"
        title="Nuevo proyecto"
        sub-title="Dale un nombre único al proyecto"
    />

    <custom-modal :open="customModalOpen">
        <template #header>
            <h1 class="text-3xl">Titulo del modal</h1>
        </template>

        <template #body>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt recusandae veritatis adipisci, ex incidunt beatae debitis corrupti architecto nobis! Hic temporibus architecto deserunt quo? Temporibus delectus praesentium consectetur id alias?
            </p>
        </template>

        <template #footer>
            <div class="flex justify-end">
                <button @click="customModalOpen = false" class="btn mr-4">Close</button>
                <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
            </div>
        </template>
    </custom-modal>

    <fab-button @click="modalOpen = true">
        <AddCircle />
    </fab-button>

    <fab-button @click="customModalOpen = true" position="bottom-left">
        <ModalIcon />
    </fab-button>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';
import { Task } from '../interfaces/project.interface';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();

// const onNewValue = (projectName:string) => {
//     projectsStore.projectList.push({
//         id: '3',
//         name: projectName,
//         tasks: []
//     })
// }


</script>