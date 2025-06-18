type Query {
  // Получить информацию о клиенте по ID
  client(id: ID!): Client

  // Получить список документов клиента по ID
  clientDocuments(id: ID!): [Document!]!

  // Получить информацию о родственниках клиента по ID
  clientRelatives(id: ID!): [Relative!]!
}

// Информация о клиенте
type Client {
  id: ID!
  name: String!
  age: Int!
  documents: [Document!]!  // Вложенная связь для документов
  relatives: [Relative!]!  // Вложенная связь для родственников
}

// Документ клиента
type Document {
  id: ID!
  type: String!
  number: String!
  issueDate: String!
  expiryDate: String!
}

// Родственник клиента
type Relative {
  id: ID!
  relationType: String!
  name: String!
  age: Int!
}
