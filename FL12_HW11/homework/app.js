const structure = [{
    'folder': true,
    'title': 'Films',
    'children': [{
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [{
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [{
      'folder': true,
      'title': 'EPAM Homework answers',
      'children': null
    }]
  }
];

const rootNode = document.getElementById('root');

function parentFolder(param) {
  if (param === null || param.getAttribute('class').includes('folder')) {
    return param;
  } else {
    return parentFolder(param.parentNode);
  }
}

function addIconToNode(param) {
  let icon = document.createElement('i');
  icon.setAttribute('class', 'material-icons');
  param.appendChild(icon);
}

function openedFolders(state) {
  let target = parentFolder(state.target);
  let openedFolderClass = ' folder-opened';
  let folderIsOpen = target
    .getAttribute('class')
    .includes(openedFolderClass);
  let classAttribute = folderIsOpen ?
    target.getAttribute('class').replace(openedFolderClass, '') :
    target.getAttribute('class') + openedFolderClass;
  target.setAttribute('class', classAttribute);
}

function foldersTree(elements, rootNode) {
  let listWrapper = document.createElement('ul');
  elements.forEach(element => {
    let listItem = document.createElement('li');
    let text = document.createElement('span');
    text.setAttribute('class', 'text');
    if (element.folder) {
      listItem.setAttribute('class', 'folder');
      addIconToNode(text);
      text.addEventListener('click', openedFolders);
    } else if (element.empty) {
      listItem.setAttribute('class', 'empty');
    } else {
      listItem.setAttribute('class', 'file');
      addIconToNode(text);
    }
    let emptyFolder = document.createTextNode(element.title);
    text.appendChild(emptyFolder);
    listItem.appendChild(text);
    if (element.folder) {
      if (element.children) {
        foldersTree(element.children, listItem);
      } else {
        foldersTree(
          [{
            empty: true,
            title: 'Folder is empty'
          }],
          listItem
        );
      }
    }
    listWrapper.appendChild(listItem);
  });
  rootNode.appendChild(listWrapper);
}

foldersTree(structure, rootNode);