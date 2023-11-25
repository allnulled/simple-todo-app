
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 Todo app</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <style>\n      h5 {\n        margin: 0;\n        padding: 12px;\n        background-color: #333;\n        color: white;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>Todo app</h5>"
 + "    <div>"
 + "      <input style=\"width:100%;\" type=\"text\" v-on:keypress.enter=\"add_todo\" v-model=\"todo_name\" placeholder=\"Write your new task and press ENTER\" />"
 + "    </div>"
 + "    <table>"
 + "      <tr v-for=\"task, task_index in todos\" v-bind:key=\"'task-' + task_index\">"
 + "        <td style=\"width: 100%;\">{{ task.name }}</td>"
 + "        <td>"
 + "          <button style=\"min-width: auto;\" v-on:click=\"() => remove_todo(task_index)\">✖</button>"
 + "        </td>"
 + "      </tr>"
 + "    </table>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { todos:[  ],
todo_name:""
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ add_todo() {try {
this.todos.push( { name:this.todo_name
} );
this.todo_name = "";
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
remove_todo( indice ) {try {
this.todos.splice( indice,
1 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");