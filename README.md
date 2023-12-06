## ccompilerOptions
### allowJS
allowJs允许 TypeScript 项目加载 JS 脚本。编译时，也会将 JS 文件，一起拷贝到输出目录。
alwaysStrict确保脚本以 ECMAScript 严格模式进行解析，因此脚本头部不用写"use strict"。它的值是一个布尔值，默认为true。
baseUrl的值为字符串，指定 TypeScript 项目的基准目录。
checkJS设置对 JS 文件同样进行类型检查。打开这个属性，也会自动打开allowJs。它等同于在 JS 脚本的头部添加// @ts-check命令。
composite打开某些设置，使得 TypeScript 项目可以进行增量构建，往往跟incremental属性配合使用。
declaration设置编译时是否为每个脚本生成类型声明文件.d.ts。

paths基于baseUrl进行加载，所以必须同时设置后者。

typeRoots设置类型模块所在的目录，默认是node_modules/@types，该目录里面的模块会自动加入编译。一旦指定了该属性，就不会再用默认值node_modules/@types里面的类型模块。
默认情况下，typeRoots目录下所有模块都会自动加入编译，如果指定了types属性，那么只有其中列出的模块才会自动加入编译。
如果"types": []，就表示不会自动将所有@types模块加入编译。



## includes
?：指代单个字符
*：指代任意字符，不含路径分隔符
**：指定任意目录层级
## excludes

## extends

如果extends属性指定的路径不是以./或../开头，那么编译器将在node_modules目录下查找指定的配置文件
## files
