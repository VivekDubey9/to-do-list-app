int main() {
    
    
    int T;
    cin >> T;

    while (T--) {
        int N;
        cin >> N;

        stack<int> readOperations;
        unordered_set<int> uniqueBooks;

        for (int i = 0; i < N; ++i) {
            int operationType;
            cin >> operationType;

            if (operationType == 1) {
                int x;
                cin >> x;
                for (int j = 0; j < x; ++j) {
                    int book;
                    cin >> book;
                    readOperations.push(book);
                    uniqueBooks.insert(book);
                }
            } else if (operationType == 2) {
                // Perform type 2 operation: undo the last operation
                int lastReadBook = readOperations.top();
                readOperations.pop();
                uniqueBooks.erase(lastReadBook);
            }
        }

        cout << uniqueBooks.size() << endl;
    }

    return 0;
}