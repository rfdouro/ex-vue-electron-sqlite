<template>
 <q-page padding>
  <q-input type="text" v-model="usuario.nome" label="Nome"></q-input>
  <q-input type="number" v-model="usuario.idade" label="Idade"></q-input>
  <q-btn-group>
   <q-btn color="primary" text-color="white" label="Salvar" icon="verified_user" @click="salva" />
   <q-btn color="amber" text-color="black" label="Cancelar" @click="limparDados" />
  </q-btn-group>

  <q-table title="Usuários" :rows="usuarios" :columns="columns" row-key="id" :visible-columns="visibleColumns">
   <template v-slot:body-cell-actions="props">
    <q-td :props="props">
     <q-btn dense round flat color="blue" @click="editRow(props)" icon="edit"></q-btn>
     <q-btn dense round flat color="red" icon="delete" @click="excluir(props)"></q-btn>
    </q-td>
   </template>
  </q-table>
 </q-page>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import UsuarioRepository from "@/data/repositories/usuarioRepository";

export default {
 name: "HomeView",
 components: {},
 data() {
  return {
   usuario: {
    id: null,
    nome: null,
   },
   usuarios: [],
   visibleColumns: ["nome", "idade", "actions"],
   columns: [
    {
     name: "id",
     required: false,
     label: "Id",
     align: "left",
     visible: false,
     field: (row) => row.id,
     format: (val) => `${val}`,
     sortable: true,
    },
    {
     name: "nome",
     required: true,
     label: "Nome",
     align: "left",
     field: (row) => row.nome,
     format: (val) => `${val}`,
     sortable: true,
    },
    {
     name: "idade",
     required: true,
     label: "Idade",
     align: "left",
     field: (row) => row.idade,
     format: (val) => `${val}`,
     sortable: true,
    },
    { name: "actions", label: "Ações", field: "", align: "center" },
   ],
  };
 },
 mounted() {
  this.lista();
 },
 methods: {
  limparDados() {
   this.usuario = {
    id: null,
    nome: null,
   };
  },
  salva() {
   let usuRepo = new UsuarioRepository();
   if (this.usuario.id != null) {
    usuRepo.atualizar(this.usuario, () => {
     this.$q
      .dialog({
       title: "Mensagem",
       message: "Salvo",
      })
      .onOk(() => {
       this.lista();
      });
    });
   } else {
    usuRepo.salvar(this.usuario, () => {
     this.$q
      .dialog({
       title: "Mensagem",
       message: "Salvo",
      })
      .onOk(() => {
       this.lista();
      });
    });
   }
  },
  editRow(p) {
   let usuRepo = new UsuarioRepository();
   usuRepo.selecionaPorId(p.key, (u) => {
    this.usuario = u;
   });
  },
  excluir(p) {
   this.$q
    .dialog({
     title: "Confirmação",
     message: `Deseja realmente excluir?`,
     cancel: true,
     persistent: true,
    })
    .onOk(() => {
     let usuRepo = new UsuarioRepository();
     usuRepo.excluiPorId(p.key, this.lista());
    })
    .onCancel(() => { })
    .onDismiss(() => { });
  },
  lista() {
   let usuRepo = new UsuarioRepository();
   usuRepo.todos((u) => {
    this.usuarios = u;
    console.log(this.usuarios);
    this.limparDados();
   });
  },
 },
};
</script>
