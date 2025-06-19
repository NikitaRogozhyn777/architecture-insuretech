// Получить базовую информацию о клиенте
query {
  client(id: "123") {
    id
    name
    age
  }
}

// Получить клиента с его документами
query {
  client(id: "123") {
    id
    name
    documents {
      type
      number
    }
  }
}

// Получить клиента с его родственниками
query {
  client(id: "123") {
    id
    name
    relatives {
      relationType
      name
    }
  }
}

// Получить только документы клиента (аналог REST /clients/{id}/documents)
query {
  clientDocuments(id: "123") {
    id
    type
    number
  }
}

// Получить только родственников клиента (аналог REST /clients/{id}/relatives)
query {
  clientRelatives(id: "123") {
    id
    name
    relationType
  }
}
